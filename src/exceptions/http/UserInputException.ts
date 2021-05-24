import HttpException from "./HttpException"

class UserInputException extends HttpException {
  constructor(message = "Bad Request") {
    super(message, "USER_INPUT")
    this.name = "UserInputError"
  }
}

/**
 * @deprecated Use UserInputException
 */
const UserInputError = UserInputException

export { UserInputException, UserInputError }
export default UserInputException
