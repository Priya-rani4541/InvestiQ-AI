import { analyzeCompany } from "../agents/research/companyResearch.agent.js";

import {
    successResponse,
    errorResponse,
} from "../utils/apiResponse.js";

export const analyze = async (req, res) => {

    try {

        const { company } = req.body;

        const analysis = await analyzeCompany(company);

        return successResponse(

            res,

            analysis,

            "Company analysis completed successfully."

        );

    }

    catch (error) {

        return errorResponse(res, error);

    }

};