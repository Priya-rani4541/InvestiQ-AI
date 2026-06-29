import ParserError from "../errors/ParserError.js";

export const parseGeminiJSON = (text) => {
  try {
    const cleanedText = text
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(cleanedText);

  } catch (error) {

    throw new ParserError(
      "Invalid JSON received from Gemini API."
    );

  }
};