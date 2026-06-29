import AIServiceError from "./AIServiceError.js";

class ValidationError extends AIServiceError {
  constructor(message = "AI Response Validation Failed") {
    super(message, 400);

    this.name = "ValidationError";
  }
}

export default ValidationError;