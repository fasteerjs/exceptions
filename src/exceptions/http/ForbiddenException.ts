import HttpException from "./HttpException"

class ForbiddenException extends HttpException {
  constructor(message = "Forbidden") {
    super(message, "FORBIDDEN")
    this.name = "ForbiddenException"
  }
}

export { ForbiddenException }
export default ForbiddenException
