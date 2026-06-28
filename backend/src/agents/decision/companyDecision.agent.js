import genAI from "../../config/gemini.js";

export const generateDecision = async (
  company,
  researchReport,
  financialReport,
  sentimentReport
) => {

  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

  const prompt = `
You are a Senior Investment Advisor working at Goldman Sachs.

Your responsibility is to decide whether an investor should INVEST or PASS.

==================================================

Company Name

${company}

==================================================

Company Research Report

${researchReport}

==================================================

Financial Analysis Report

${financialReport}

==================================================

Market Sentiment Report

${sentimentReport}

==================================================

Analyze ALL reports together.

Never ignore any report.

Your decision MUST be based ONLY on these reports.

Never say information is unavailable if it already exists in the reports.

==================================================

Return ONLY a valid JSON object.

The response MUST be directly parsable using JSON.parse().

Do NOT return markdown.

Do NOT wrap JSON inside \`\`\`.

Do NOT add any explanation before or after JSON.

Return EXACTLY this schema:

{
  "decision":"INVEST",
  "confidence":85,
  "reason":"string",
  "strengths":[
    "string",
    "string",
    "string"
  ],
  "risks":[
    "string",
    "string",
    "string"
  ],
  "expectedReturn":"Example: 8%-10% annually",
  "investmentHorizon":"Short Term | Medium Term | Long Term",
  "suitableFor":"Conservative Investors | Moderate Investors | Aggressive Investors"
}

==================================================

Rules

1. Decision must ONLY be INVEST or PASS.

2. confidence must be an integer between 0 and 100.

3. reason must be under 100 words.

4. strengths must contain EXACTLY 3 items.

5. risks must contain EXACTLY 3 items.

6. expectedReturn should be realistic.

7. Never leave any field empty.

8. If information is unavailable, return "Not Available".

9. Do not invent financial data.

10. Use ONLY information from the reports above.

11. Be professional and unbiased.

12. Return ONLY JSON.
`;

  const result = await model.generateContent(prompt);

  return result.response.text();

};