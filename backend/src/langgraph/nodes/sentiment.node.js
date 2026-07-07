import { analyzeSentiment } from "../../agents/sentiment/companySentiment.agent.js";
import AppError from "../../errors/AppError.js";

export async function sentimentNode(state) {

    try {

        const sentiment = await analyzeSentiment(

            state.company,

            state.retrievedContext

        );

        return {

            ...state,

            sentiment,

        };

    }

    catch (error) {

        throw new AppError(

            error.message || "Sentiment Agent Failed.",

            error.statusCode || 500,

            "SENTIMENT_AGENT_ERROR"

        );

    }

}