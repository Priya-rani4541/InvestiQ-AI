import { successResponse } from "../utils/apiResponse.js";

export const healthCheck = (req, res) => {

    return successResponse(

        res,

        {

            version: "1.0.0",

            service: "InvestiQ-AI Backend",

        },

        "Backend is running successfully."

    );

};