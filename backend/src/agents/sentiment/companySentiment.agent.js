import genAI from "../../config/gemini.js";

export const analyzeSentiment = async (companyName) => {

  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const prompt = `
You are a Senior Stock Market Sentiment Analyst.

Analyze the public and investor sentiment for ${companyName}.

Return your response in the following format only.

# Overall Sentiment

# Latest Market News

# Positive Factors

# Negative Factors

# Investor Confidence

# Analyst Opinion

# Short-Term Outlook

# Long-Term Outlook

# Sentiment Score (0-100)

# Final Sentiment
`;

  const result = await model.generateContent(prompt);

  return result.response.text();
};