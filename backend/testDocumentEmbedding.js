import dotenv from "dotenv";
dotenv.config();

import { processDocument } from "./src/rag/services/document.service.js";
import { generateBatchEmbeddings } from "./src/rag/embeddings/embedding.service.js";

try {

    console.log("========================================");
    console.log("      INVESTIQ-AI RAG INTEGRATION TEST");
    console.log("========================================");

    // Step 1
    const document = await processDocument(
        "./uploads/pdf/tesla_annual_report.pdf"
    );

    console.log("✅ Document Processed Successfully");
    console.log("----------------------------------------");

    console.log("Total Chunks :", document.chunks.length);

    // Step 2
    const embeddings = await generateBatchEmbeddings(
        document.chunks
    );

    console.log("----------------------------------------");

    console.log("Embeddings Generated :", embeddings.length);

    console.log("----------------------------------------");

    console.log("Is Embeddings Array ?");

    console.log(Array.isArray(embeddings));

    console.log("----------------------------------------");

    console.log("First Embedding Object");

    console.dir(embeddings[0], { depth: null });

    console.log("----------------------------------------");

    console.log(
        "Constructor :",
        embeddings[0]?.constructor?.name
    );

    console.log("----------------------------------------");

    if (Array.isArray(embeddings[0])) {

        console.log(
            "Embedding Dimension :",
            embeddings[0].length
        );

    } else {

        console.log(
            "Embedding is NOT a normal JavaScript Array."
        );

    }

    console.log("----------------------------------------");

    console.log("✅ Sprint 4 Integration Test Passed");

} catch (error) {

    console.error("----------------------------------------");

    console.error("❌ Integration Test Failed");

    console.error(error);

}