import AIServiceError from "./AIServiceError.js";

class ParserError extends AIServiceError {
  constructor(message = "Failed to parse AI response") {
    super(message, 500);

    this.name = "ParserError";
  }
}

export default ParserError;