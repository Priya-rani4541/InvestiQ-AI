import { generateDecision } from "../../agents/decision/companyDecision.agent.js";
import AppError from "../../errors/AppError.js";

export async function decisionNode(state) {

    try {

        const decision = await generateDecision(

            state.company,

            state.retrievedContext,

            state.research,

            state.financial,

            state.sentiment

        );

        return {

            ...state,

            decision,

        };

    }

    catch (error) {

        throw new AppError(

            error.message || "Decision Agent Failed.",

            error.statusCode || 500,

            "DECISION_AGENT_ERROR"

        );

    }

}