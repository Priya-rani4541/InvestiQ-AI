class AIServiceError extends Error {
    constructor(message, statusCode = 500) {
      super(message);
  
      this.name = "AIServiceError";
      this.statusCode = statusCode;
  
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  export default AIServiceError;