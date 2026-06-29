import genAI from "../../config/gemini.js";
import { financialPrompt } from "../../prompts/financial.prompt.js";

export const analyzeFinancials = async (companyName) => {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const prompt = financialPrompt(companyName);

  const result = await model.generateContent(prompt);

  return result.response.text();
};