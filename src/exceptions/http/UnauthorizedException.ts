import HttpException from "./HttpException"

class UnauthorizedException extends HttpException {
  constructor(message = "Unauthorized", code = 401) {
    super(message, "UNAUTHORIZED", code)
    this.name = "UnauthorizedException"
  }
}

export { UnauthorizedException }
export default UnauthorizedException
