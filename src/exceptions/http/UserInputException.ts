import HttpException from "./HttpException"

export default class UserInputError extends HttpException {
  constructor(message = "Bad Request") {
    super(message, "USER_INPUT")
    this.name = "UserInputError"
  }
}
