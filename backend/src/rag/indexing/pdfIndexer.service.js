import { processDocument } from "../services/document.service.js";

import { generateBatchEmbeddings } from "../embeddings/embedding.service.js";

import { addVectors } from "../vectorstore/vectorStore.service.js";

export const indexPDF = async (filePath) => {

    // 1. Process Document
    const document = await processDocument(filePath);

    // 2. Generate Embeddings
    const embeddings = await generateBatchEmbeddings(
        document.chunks
    );

    // 3. Build Vector Documents
    const vectorDocuments = document.chunks.map((chunk, index) => ({

        documentId: chunk.id ?? `chunk-${index + 1}`,

        content: chunk.content,

        metadata: chunk.metadata,

        embedding: embeddings[index]

    }));

    // 4. Store Vectors
    await addVectors(vectorDocuments);

    return {

        chunkCount: document.chunks.length,

        vectorCount: vectorDocuments.length

    };

};