import genAI from "../../config/gemini.js";

import { researchPrompt } from "../../prompts/research.prompt.js";

import { retrieveRelevantChunks } from "../../rag/retriever/retriever.service.js";
import { formatContext } from "../../rag/context/contextFormatter.service.js";

export const analyzeCompany = async (companyName) => {

    /**
     * Retrieve Relevant Chunks
     */

    const retrievedDocuments = await retrieveRelevantChunks(
        companyName,
        5
    );

    /**
     * Build Context
     */

    const retrievedContext = formatContext(
        retrievedDocuments
    );

    console.log("========== RAG ==========");
    console.log("Retrieved Chunks :", retrievedDocuments.length);
    console.log(retrievedContext);
    console.log("=========================");

    /**
     * Gemini
     */

    const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
    });

    const prompt = researchPrompt(
        companyName,
        retrievedContext
    );

    const result = await model.generateContent(
        prompt
    );

    const text = result.response.text();

    const cleaned = text
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

    try {

        return JSON.parse(cleaned);

    }

    catch (error) {

        console.error("========== GEMINI OUTPUT ==========");
        console.error(cleaned);
        console.error("===================================");

        throw new Error(
            "Gemini returned invalid JSON."
        );

    }

};