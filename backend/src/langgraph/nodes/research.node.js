import { analyzeCompany } from "../../agents/research/companyResearch.agent.js";

export async function researchNode(state) {
  try {
    const research = await analyzeCompany(state.company);

    return {
      ...state,
      research,
    };
  } catch (error) {
    throw new Error(`Research Node Error: ${error.message}`);
  }
}