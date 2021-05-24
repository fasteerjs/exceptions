import HttpException from "./HttpException"

class UserInputException extends HttpException {
  constructor(message = "Bad Request") {
    super(message, "USER_INPUT")
    this.name = "UserInputError"
  }
}

export { UserInputException }
export default UserInputException
