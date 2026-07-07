import { analyzeFinancials } from "../agents/financial/companyFinancial.agent.js";

import {
    successResponse,
    errorResponse,
} from "../utils/apiResponse.js";

export const financialAnalysis = async (req, res) => {

    try {

        const { company } = req.body;

        const analysis = await analyzeFinancials(company);

        return successResponse(

            res,

            analysis,

            "Financial analysis completed successfully."

        );

    }

    catch (error) {

        return errorResponse(res, error);

    }

};