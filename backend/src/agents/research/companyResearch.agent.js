import genAI from "../../config/gemini.js";

export const analyzeCompany = async (companyName) => {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const prompt = `
You are an expert Investment Research Analyst.

Analyze the company: ${companyName}

Return your response in this format:

# Company Overview

# Business Model

# Strengths

# Weaknesses

# Growth Potential

# Risks

# Investment Recommendation

# Confidence Score (0-100%)
`;

  const result = await model.generateContent(prompt);

  return result.response.text();
};