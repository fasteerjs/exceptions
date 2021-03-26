import HttpException from "./HttpException"

class UserInputError extends HttpException {
  constructor(message = "Bad Request") {
    super(message, "USER_INPUT")
    this.name = "UserInputError"
  }
}

export { UserInputError }
export default UserInputError
