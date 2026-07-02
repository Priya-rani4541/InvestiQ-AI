import { generateDecision } from "../../agents/decision/companyDecision.agent.js";

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

        throw new Error(

            `Decision Node Error: ${error.message}`

        );

    }

}