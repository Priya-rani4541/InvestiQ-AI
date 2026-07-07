import { GoogleGenerativeAI } from "@google/generative-ai";

import AppError from "../errors/AppError.js";

import {
    successResponse,
    errorResponse,
} from "../utils/apiResponse.js";

import { uploadPDFService } from "../services/upload.service.js";
import { getIndexStatusService } from "../services/indexStatus.service.js";

import { retrieveRelevantChunks } from "../rag/retriever/retriever.service.js";
import { formatContext } from "../rag/context/contextFormatter.service.js";
import { buildPromptContext } from "../rag/context/promptContext.service.js";

const genAI = new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY
);

const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
});

/**
 * ======================================
 * Upload PDF
 * ======================================
 */

export const uploadPDF = async (req, res) => {

    try {

        if (!req.file) {

            throw new AppError(
                "No PDF uploaded.",
                400,
                "PDF_REQUIRED"
            );

        }

        const result = await uploadPDFService(req.file);

        return successResponse(
            res,
            result,
            "PDF uploaded successfully."
        );

    }

    catch (error) {

        return errorResponse(
            res,
            error
        );

    }

};

/**
 * ======================================
 * Query RAG
 * ======================================
 */

export const queryRAG = async (req, res) => {

    try {

        const { question } = req.body;

        if (!question) {

            throw new AppError(
                "Question is required.",
                400,
                "QUESTION_REQUIRED"
            );

        }

        /**
         * Retrieve Similar Chunks
         */

        const retrieved = await retrieveRelevantChunks(

            question,

            5

        );

        /**
         * Build Context
         */

        const context = formatContext(

            retrieved

        );

        /**
         * Build Prompt
         */

        const prompt = buildPromptContext(

            question,

            context

        );

        /**
         * Generate Answer
         */

        const response = await model.generateContent(

            prompt

        );

        const answer = response.response.text();

        return successResponse(

            res,

            {

                question,

                answer,

                sources: retrieved.map(

                    (doc) => ({

                        documentId: doc.documentId,

                        similarity: Number(

                            doc.score.toFixed(4)

                        ),

                    })

                ),

            },

            "RAG query completed successfully."

        );

    }

    catch (error) {

        return errorResponse(

            res,

            error

        );

    }

};

/**
 * ======================================
 * Get Index Status
 * ======================================
 */

export const getIndexStatus = async (req, res) => {

    try {

        const { documentId } = req.params;

        const result = await getIndexStatusService(

            documentId

        );

        return successResponse(

            res,

            result,

            "Index status fetched successfully."

        );

    }

    catch (error) {

        return errorResponse(

            res,

            error

        );

    }

};