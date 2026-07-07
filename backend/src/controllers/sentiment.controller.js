import { analyzeSentiment } from "../agents/sentiment/companySentiment.agent.js";

import {
    successResponse,
    errorResponse,
} from "../utils/apiResponse.js";

export const sentimentAnalysis = async (req, res) => {

    try {

        const { company } = req.body;

        const analysis = await analyzeSentiment(company);

        return successResponse(

            res,

            analysis,

            "Sentiment analysis completed successfully."

        );

    }

    catch (error) {

        return errorResponse(res, error);

    }

};