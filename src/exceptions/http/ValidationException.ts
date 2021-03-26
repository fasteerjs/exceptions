import HttpException from "./HttpException"

export default class ValidationException extends HttpException {
  constructor(message = "Validation Error") {
    super(message, "VALIDATION")
  }
}
