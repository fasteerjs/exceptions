import UserInputError from "./UserInputException"

class NotFoundException extends UserInputError {
  constructor(message = "Not Found") {
    super(message)
  }
}

export { NotFoundException }
export default NotFoundException
