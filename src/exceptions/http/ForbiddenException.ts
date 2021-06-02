import HttpException from "./HttpException"

class ForbiddenException extends HttpException {
  constructor(message = "Forbidden", code = 403) {
    super(message, "FORBIDDEN", code)
    this.name = "ForbiddenException"
  }
}

export { ForbiddenException }
export default ForbiddenException
