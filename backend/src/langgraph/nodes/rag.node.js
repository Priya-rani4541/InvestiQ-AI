import { processDocument } from "../../rag/services/document.service.js";

import { generateBatchEmbeddings } from "../../rag/embeddings/embedding.service.js";

import { addVectors } from "../../rag/vectorstore/vectorStore.service.js";

import { retrieveRelevantChunks } from "../../rag/retriever/retriever.service.js";

import { buildContext } from "../../rag/context/contextBuilder.service.js";

export const ragNode = async (state) => {

    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("📄 RAG Node Started");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

    const {

        company,

        uploadedDocuments,

    } = state;

    if (!uploadedDocuments || uploadedDocuments.length === 0) {

        throw new Error("No uploaded documents found.");

    }

    /**
     * For Sprint 9
     * Process first uploaded document.
     *
     * Sprint 10:
     * We'll support multiple PDFs.
     */

    const document = uploadedDocuments[0];

    /**
     * Step 1
     * Process PDF
     */

    const processedDocument = await processDocument(

        document.filePath

    );

    /**
     * Step 2
     * Generate Embeddings
     */

    const embeddings = await generateBatchEmbeddings(

        processedDocument.chunks

    );

    /**
     * Step 3
     * Prepare Vector Documents
     */

    const vectorDocuments = processedDocument.chunks.map(

        (chunk, index) => ({

            documentId: chunk.id,

            content: chunk.content,

            embedding: embeddings[index],

        })

    );

    /**
     * Step 4
     * Store in Local Vector Store
     */

    await addVectors(

        vectorDocuments

    );

    /**
     * Step 5
     * Retrieve Relevant Chunks
     */

    const retrievedChunks = await retrieveRelevantChunks(

        company,

        5

    );

    /**
     * Step 6
     * Build Context
     */

    const retrievedContext = buildContext(

        retrievedChunks

    );

    console.log("✅ RAG Context Generated");

    return {

        ...state,

        retrievedContext,

    };

};