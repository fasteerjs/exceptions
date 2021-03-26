import HttpException from "./HttpException"

class ValidationException extends HttpException {
  constructor(message = "Validation Error") {
    super(message, "VALIDATION")
  }
}

export { ValidationException }
export default ValidationException
