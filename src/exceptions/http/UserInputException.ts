import HttpException from "./HttpException"

class UserInputException extends HttpException {
  constructor(message = "Bad Request", code = 400) {
    super(message, "USER_INPUT", code)
    this.name = "UserInputException"
  }
}

/**
 * @deprecated Use UserInputException
 */
const UserInputError = UserInputException

export { UserInputException, UserInputError }
export default UserInputException
