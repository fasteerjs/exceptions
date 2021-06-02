import HttpException from "./HttpException"

class ValidationException extends HttpException {
  constructor(message = "Validation Error", code = 400) {
    super(message, "VALIDATION", code)
  }
}

export { ValidationException }
export default ValidationException
