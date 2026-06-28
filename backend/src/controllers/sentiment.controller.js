import { analyzeSentiment } from "../agents/sentiment/companySentiment.agent.js";

export const sentimentAnalysis = async (req, res) => {

  try {

    const { company } = req.body;

    const analysis = await analyzeSentiment(company);

    return res.status(200).json({
      success: true,
      analysis,
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};