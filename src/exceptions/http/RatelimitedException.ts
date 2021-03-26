import ForbiddenException from "./ForbiddenException"

class RatelimitedException extends ForbiddenException {
  constructor(message = "Rate Limited") {
    super(message)
  }
}

export { RatelimitedException }
export default RatelimitedException
