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

        }

        catch (error) {

            const message = error?.message || "";

            /**
             * Retry only on temporary failures
             */

            const retryable =

                message.includes("429") ||

                message.includes("503") ||

                message.includes("500");

            logEmbedding(

                `Embedding Error : ${message}`

            );

            if (!retryable) {

                throw new EmbeddingError(

                    `Embedding Failed : ${message}`

                );

            }

            retries--;

            logEmbedding(

                `Retry Remaining : ${retries}`

            );

            if (retries === 0) {

                throw new EmbeddingError(

                    "EMBEDDING_QUOTA_EXCEEDED"

                );

            }

            await new Promise(

                resolve =>

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

/**
 * Generate Batch Embeddings
 * (Production Optimized)
 */

export const generateBatchEmbeddings = async (

    chunks,

    batchSize = 10

) => {

    if (!chunks || chunks.length === 0) {

        throw new EmbeddingError(

            "Chunks are required."

        );

    }

    logEmbedding(

        `Generating ${chunks.length} embeddings...`

    );

    const vectors = [];

    const totalBatches = Math.ceil(

        chunks.length / batchSize

    );

    for (

        let batch = 0;

        batch < totalBatches;

        batch++

    ) {

        const start = batch * batchSize;

        const end = Math.min(

            start + batchSize,

            chunks.length

        );

        logEmbedding(

            `Batch ${batch + 1}/${totalBatches} (${start + 1}-${end})`

        );

        const currentBatch = chunks.slice(

            start,

            end

        );

        const batchVectors = await Promise.all(

            currentBatch.map(

                async (chunk) =>

                    await generateEmbedding(

                        chunk.content

                    )

            )

        );

        vectors.push(...batchVectors);

    }

    logEmbedding(

        `Successfully generated ${vectors.length} embeddings.`

    );

    return vectors;

};