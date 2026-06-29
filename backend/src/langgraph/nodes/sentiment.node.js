import { analyzeSentiment } from "../../agents/sentiment/companySentiment.agent.js";

export async function sentimentNode(state) {
  try {
    const sentiment = await analyzeSentiment(state.company);

    return {
      ...state,
      sentiment,
    };
  } catch (error) {
    throw new Error(`Sentiment Node Error: ${error.message}`);
  }
}