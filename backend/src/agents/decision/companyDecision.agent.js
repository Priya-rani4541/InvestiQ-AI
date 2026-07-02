import genAI from "../../config/gemini.js";

import { decisionPrompt } from "../../prompts/decision.prompt.js";

import { parseGeminiJSON } from "../../utils/jsonParser.js";

import { validateDecisionSchema } from "../../utils/aiDecisionValidator.js";

import GeminiError from "../../errors/GeminiError.js";
import AIServiceError from "../../errors/AIServiceError.js";

export const generateDecision = async (
    company,
    retrievedContext,
    researchReport,
    financialReport,
    sentimentReport
) => {

    try {

        const model = genAI.getGenerativeModel({
            model: "gemini-2.5-flash",
        });

        const prompt = decisionPrompt(
            company,
            retrievedContext,
            researchReport,
            financialReport,
            sentimentReport
        );

        const result = await model.generateContent(prompt);

        const rawResponse = result.response.text();

        const parsedResponse = parseGeminiJSON(rawResponse);

        const validatedResponse = validateDecisionSchema(
            parsedResponse
        );

        return validatedResponse;

    } catch (error) {

        // Already our custom error
        if (error instanceof AIServiceError) {

            throw error;

        }

        // Unknown Gemini Error
        throw new GeminiError(error.message);

    }

};