import graph from "../langgraph/index.js";
import {
  successResponse,
  errorResponse,
} from "../utils/apiResponse.js";

import { logger } from "../logger/logger.js";

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

    logger.error(error.stack || error.message);

    return errorResponse(res, error);

  }
};