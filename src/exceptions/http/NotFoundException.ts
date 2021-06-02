import UserInputException from "./UserInputException"

class NotFoundException extends UserInputException {
  constructor(message = "Not Found", code = 404) {
    super(message, code)
  }
}

export { NotFoundException }
export default NotFoundException
