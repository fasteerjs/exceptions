import HttpException from "./HttpException"

class UnauthorizedException extends HttpException {
  constructor(message = "Unauthorized") {
    super(message, "UNAUTHORIZED")
    this.name = "UnauthorizedException"
  }
}

export { UnauthorizedException }
export default UnauthorizedException
