import { analyzeFinancials } from "../../agents/financial/companyFinancial.agent.js";

export async function financialNode(state) {
  try {
    const financial = await analyzeFinancials(state.company);

    return {
      ...state,
      financial,
    };
  } catch (error) {
    throw new Error(`Financial Node Error: ${error.message}`);
  }
}