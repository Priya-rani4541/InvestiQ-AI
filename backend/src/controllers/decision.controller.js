import graph from "../langgraph/index.js";

export const analyzeDecision = async (req, res) => {
  try {
    const { company } = req.body;

    const result = await graph.invoke({
      company,
    });

    return res.status(200).json({
      success: true,
      decision: result.decision,
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};