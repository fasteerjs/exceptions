import HttpException from "./HttpException"

export default class ForbiddenException extends HttpException {
  constructor(message = "Forbidden") {
    super(message, "FORBIDDEN")
    this.name = "ForbiddenException"
  }
}
