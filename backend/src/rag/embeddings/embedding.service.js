import dotenv from "dotenv";
dotenv.config();

import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";

import {
    EMBEDDING_MODEL,
    MAX_RETRIES,
    RETRY_DELAY,
} from "../constants/embedding.constants.js";

import { EmbeddingError } from "../errors/EmbeddingError.js";

import { logEmbedding } from "../logger/embedding.logger.js";

const embeddings = new GoogleGenerativeAIEmbeddings({
    apiKey: process.env.GEMINI_API_KEY,
    model: EMBEDDING_MODEL,
});

/**
 * Retry Helper
 */
const retry = async (callback) => {

    let retries = MAX_RETRIES;

    while (retries > 0) {

        try {

            return await callback();

        } catch (error) {

            retries--;

            logEmbedding(
                `Retry Attempt Remaining : ${retries}`
            );

            if (retries === 0) {

                throw new EmbeddingError(error.message);

            }

            await new Promise((resolve) =>
                setTimeout(resolve, RETRY_DELAY)
            );

        }

    }

};

/**
 * Generate Single Embedding
 */

export const generateEmbedding = async (text) => {

    if (!text) {

        throw new EmbeddingError(
            "Text is required."
        );

    }

    logEmbedding("Generating Single Embedding...");

    return retry(async () => {

        return await embeddings.embedQuery(text);

    });

};

/**
 * Generate Batch Embeddings
 */

export const generateBatchEmbeddings = async (chunks) => {

    if (!chunks || chunks.length === 0) {

        throw new EmbeddingError(
            "Chunks are required."
        );

    }

    logEmbedding(
        `Generating ${chunks.length} Embeddings...`
    );

    const vectors = [];

    for (let i = 0; i < chunks.length; i++) {

        logEmbedding(
            `Embedding ${i + 1} / ${chunks.length}`
        );

        const vector = await generateEmbedding(
            chunks[i].content
        );

        vectors.push(vector);

    }

    logEmbedding(
        `Successfully generated ${vectors.length} embeddings.`
    );

    return vectors;

};