import ValidationError from "../errors/ValidationError.js";

export const validateDecisionSchema = (decision) => {

  if (!decision || typeof decision !== "object") {
    throw new ValidationError(
      "Decision response must be an object."
    );
  }

  const {
    decision: finalDecision,
    confidence,
    reason,
    strengths,
    risks,
    expectedReturn,
    investmentHorizon,
    suitableFor,
  } = decision;

  if (!["INVEST", "PASS"].includes(finalDecision)) {
    throw new ValidationError(
      "Decision must be INVEST or PASS."
    );
  }

  if (
    typeof confidence !== "number" ||
    confidence < 0 ||
    confidence > 100
  ) {
    throw new ValidationError(
      "Confidence must be between 0 and 100."
    );
  }

  if (
    typeof reason !== "string" ||
    !reason.trim()
  ) {
    throw new ValidationError(
      "Reason is required."
    );
  }

  if (
    !Array.isArray(strengths) ||
    strengths.length !== 3
  ) {
    throw new ValidationError(
      "Strengths must contain exactly 3 items."
    );
  }

  if (
    !Array.isArray(risks) ||
    risks.length !== 3
  ) {
    throw new ValidationError(
      "Risks must contain exactly 3 items."
    );
  }

  if (
    typeof expectedReturn !== "string" ||
    !expectedReturn.trim()
  ) {
    throw new ValidationError(
      "Expected Return is required."
    );
  }

  if (
    typeof investmentHorizon !== "string" ||
    !investmentHorizon.trim()
  ) {
    throw new ValidationError(
      "Investment Horizon is required."
    );
  }

  if (
    typeof suitableFor !== "string" ||
    !suitableFor.trim()
  ) {
    throw new ValidationError(
      "Suitable For is required."
    );
  }

  return decision;
};