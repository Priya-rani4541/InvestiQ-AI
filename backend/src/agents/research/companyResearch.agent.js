import genAI from "../../config/gemini.js";

import { researchPrompt } from "../../prompts/research.prompt.js";

export const analyzeCompany = async (

    companyName,

    retrievedContext

) => {

    const model = genAI.getGenerativeModel({

        model: "gemini-2.5-flash",

    });

    const prompt = researchPrompt(

        companyName,

        retrievedContext

    );

    const result = await model.generateContent(prompt);

    return result.response.text();

};