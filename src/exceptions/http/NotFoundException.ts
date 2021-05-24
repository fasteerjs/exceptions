import UserInputException from "./UserInputException"

class NotFoundException extends UserInputException {
  constructor(message = "Not Found") {
    super(message)
  }
}

export { NotFoundException }
export default NotFoundException
