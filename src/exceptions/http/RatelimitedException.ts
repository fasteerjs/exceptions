import ForbiddenException from "./ForbiddenException"

class RatelimitedException extends ForbiddenException {
  constructor(message = "Rate Limited", code = 419) {
    super(message, code)
  }
}

export { RatelimitedException }
export default RatelimitedException
