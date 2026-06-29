import AIServiceError from "./AIServiceError.js";

class GeminiError extends AIServiceError {
  constructor(message = "Gemini API Error") {
    super(message, 503);

    this.name = "GeminiError";
  }
}

export default GeminiError;