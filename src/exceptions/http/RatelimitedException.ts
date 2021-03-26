import ForbiddenException from "./ForbiddenException"

export default class RatelimitedException extends ForbiddenException {
  constructor(message = "Rate Limited") {
    super(message)
  }
}
