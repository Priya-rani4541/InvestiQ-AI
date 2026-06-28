import { analyzeFinancials } from "../agents/financial/companyFinancial.agent.js";

export const financialAnalysis = async (req, res) => {

  try {

    const { company } = req.body;

    const analysis = await analyzeFinancials(company);

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