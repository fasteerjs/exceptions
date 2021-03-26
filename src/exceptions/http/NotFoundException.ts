import UserInputError from "./UserInputException"

export default class ForbiddenException extends UserInputError {
  constructor(message = "Not Found") {
    super(message)
  }
}
