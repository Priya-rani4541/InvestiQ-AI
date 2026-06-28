import { analyzeCompany } from "../agents/research/companyResearch.agent.js";
import { analyzeFinancials } from "../agents/financial/companyFinancial.agent.js";
import { analyzeSentiment } from "../agents/sentiment/companySentiment.agent.js";
import { generateDecision } from "../agents/decision/companyDecision.agent.js";

import { cleanJSON } from "../utils/jsonParser.js";

export const analyzeDecision = async (req, res) => {

  try {

    const { company } = req.body;

    // Agent 1
    const research = await analyzeCompany(company);

    // Agent 2
    const financial = await analyzeFinancials(company);

    // Agent 3
    const sentiment = await analyzeSentiment(company);

    // Agent 4
    const rawDecision = await generateDecision(
      company,
      research,
      financial,
      sentiment
    );

    const cleanedDecision = cleanJSON(rawDecision);

    const parsedDecision = JSON.parse(cleanedDecision);

    return res.status(200).json({
      success: true,
      decision: parsedDecision,
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};