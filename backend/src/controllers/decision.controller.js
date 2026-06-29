import graph from "../langgraph/index.js";
import {
  successResponse,
  errorResponse,
} from "../utils/apiResponse.js";

export const analyzeDecision = async (req, res) => {
  try {
    const { company } = req.body;

    const result = await graph.invoke({
      company,
    });

    return successResponse(
      res,
      result.decision,
      "Investment analysis completed successfully."
    );

  } catch (error) {

    console.error(error);

    return errorResponse(res, error);

  }
};