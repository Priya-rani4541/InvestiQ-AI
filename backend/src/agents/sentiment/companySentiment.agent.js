import genAI from "../../config/gemini.js";

import { sentimentPrompt } from "../../prompts/sentiment.prompt.js";

export const analyzeSentiment = async (

    companyName,

    retrievedContext

) => {

    const model = genAI.getGenerativeModel({

        model: "gemini-2.5-flash",

    });

    const prompt = sentimentPrompt(

        companyName,

        retrievedContext

    );

    const result = await model.generateContent(prompt);

    return result.response.text();

};