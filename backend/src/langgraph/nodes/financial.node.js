import { analyzeFinancials } from "../../agents/financial/companyFinancial.agent.js";
import AppError from "../../errors/AppError.js";

export async function financialNode(state) {

    try {

        const financial = await analyzeFinancials(

            state.company,

            state.retrievedContext

        );

        return {

            ...state,

            financial,

        };

    }

    catch (error) {

        throw new AppError(

            error.message || "Financial Agent Failed.",

            error.statusCode || 500,

            "FINANCIAL_AGENT_ERROR"

        );

    }

}