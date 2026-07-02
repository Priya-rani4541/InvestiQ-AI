import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

/**
 * Enterprise Chunking Processor
 *
 * Responsibilities:
 * - Split cleaned text
 * - Maintain overlap
 * - Attach metadata
 * - Return standardized chunks
 */

const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200,
});

export const splitIntoChunks = async (text) => {

    if (!text) {
        throw new Error("Text is required for chunking.");
    }

    const chunks = await splitter.splitText(text);

    return chunks.map((chunk, index) => ({
        id: `chunk-${index + 1}`,
        index,
        content: chunk,
        characterCount: chunk.length,
        wordCount: chunk.split(/\s+/).length,
    }));
};