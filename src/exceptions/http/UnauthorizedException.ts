import HttpException from "./HttpException"

export default class UnauthorizedException extends HttpException {
  constructor(message = "Unauthorized") {
    super(message, "UNAUTHORIZED")
    this.name = "UnauthorizedException"
  }
}
