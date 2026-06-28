import { analyzeCompany } from "../agents/research/companyResearch.agent.js";

export const analyze = async (req, res) => {
  try {
    const { company } = req.body;

    const analysis = await analyzeCompany(company);

    res.status(200).json({
      success: true,
      analysis,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};