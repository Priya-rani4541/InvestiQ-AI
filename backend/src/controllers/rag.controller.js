import { GoogleGenerativeAI } from "@google/generative-ai";

import { uploadPDFService } from "../services/upload.service.js";

import { processDocument } from "../rag/services/document.service.js";

import { generateBatchEmbeddings } from "../rag/embeddings/embedding.service.js";

import { addVectors } from "../rag/vectorstore/vectorStore.service.js";

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
 * Upload PDF Controller
 */
export const uploadPDF = async (
  req,
  res,
  next
) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No PDF uploaded.",
      });
    }

    const result = await uploadPDFService(
      req.file
    );

    return res.status(200).json({
      success: true,
      message: "PDF uploaded successfully.",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * RAG Query Controller
 */
export const queryRAG = async (
  req,
  res,
  next
) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({
        success: false,
        message: "Question is required.",
      });
    }

    /**
     * STEP 1
     * Process PDF
     */

    const pdf = await processDocument(
      "./uploads/pdf/tesla_annual_report.pdf"
    );

    /**
     * STEP 2
     * Use first 20 chunks
     */

    const chunks = pdf.chunks.slice(0, 20);

    /**
     * STEP 3
     * Generate Embeddings
     */

    const embeddings =
      await generateBatchEmbeddings(chunks);

    /**
     * STEP 4
     * Build Vector Documents
     */

    const vectorDocs = chunks.map(
      (chunk, index) => ({
        documentId: chunk.id,
        content: chunk.content,
        embedding: embeddings[index],
      })
    );

    /**
     * STEP 5
     * Store vectors
     */

    await addVectors(vectorDocs);

    /**
     * STEP 6
     * Retrieve Similar Chunks
     */

    const retrieved =
      await retrieveRelevantChunks(
        question,
        5
      );

    /**
     * STEP 7
     * Build Prompt
     */

    const context =
      formatContext(retrieved);

    const prompt =
      buildPromptContext(
        question,
        context
      );

    /**
     * STEP 8
     * Gemini
     */

    const response =
      await model.generateContent(
        prompt
      );

    const answer =
      response.response.text();

    /**
     * STEP 9
     * Response
     */

    return res.status(200).json({
      success: true,

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
    });
  } catch (error) {
    next(error);
  }
};