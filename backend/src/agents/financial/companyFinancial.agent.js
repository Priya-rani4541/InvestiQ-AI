import genAI from "../../config/gemini.js";

export const analyzeFinancials = async (companyName) => {

  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const prompt = `
You are a Senior Financial Analyst.

Analyze the financial performance of ${companyName}.

Return your response in this format.

# Revenue

# Net Profit

# Operating Margin

# Debt

# Cash Flow

# EPS

# PE Ratio

# ROE

# Financial Strength

# Overall Financial Score (0-100)
`;

  const result = await model.generateContent(prompt);

  return result.response.text();

};