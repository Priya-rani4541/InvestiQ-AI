import Document from "../../models/Document.js";

import { processDocument } from "../services/document.service.js";

import { generateBatchEmbeddings } from "../embeddings/embedding.service.js";

import { addVectors } from "../vectorstore/mongoVectorStore.service.js";

export const indexPDF = async (documentId, filePath) => {

    console.log("========== INDEX PDF ==========");

    console.log("Step 1 : Processing PDF");

    const document = await processDocument(filePath);

    console.log(
        "Chunks Generated :",
        document.chunks.length
    );

    console.log("Step 2 : Generating Embeddings");

    const embeddings = await generateBatchEmbeddings(
        document.chunks
    );

    console.log(
        "Embeddings Generated :",
        embeddings.length
    );

    console.log("Step 3 : Building Vector Documents");

    const vectorDocuments = document.chunks.map(

        (chunk, index) => ({

            documentId,

            chunkIndex: index,

            content: chunk.content,

            embedding: embeddings[index],

            metadata: {

                page:
                    chunk.metadata?.page ?? 0,

                source:
                    chunk.metadata?.fileName ??
                    document.fileName ??
                    "",

            },

        })

    );

    console.log(
        "Vector Documents :",
        vectorDocuments.length
    );

    console.log("Step 4 : Saving to MongoDB");

    await addVectors(vectorDocuments);

    console.log("Vectors Saved");

    await Document.findByIdAndUpdate(

        documentId,

        {

            indexed: true,

            indexedAt: new Date(),

            chunkCount: vectorDocuments.length,

            vectorCount: vectorDocuments.length,

        }

    );

    console.log("Document Updated");

    console.log("========== DONE ==========");

};