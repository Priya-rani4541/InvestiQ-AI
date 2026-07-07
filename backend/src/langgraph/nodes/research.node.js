import { analyzeCompany } from "../../agents/research/companyResearch.agent.js";
import AppError from "../../errors/AppError.js";

export async function researchNode(state) {

    try {

        const research = await analyzeCompany(

            state.company,

            state.retrievedContext

        );

        return {

            ...state,

            research,

        };

    }

    catch (error) {

        throw new AppError(

            error.message || "Research Agent Failed.",

            error.statusCode || 500,

            "RESEARCH_AGENT_ERROR"

        );

    }

}