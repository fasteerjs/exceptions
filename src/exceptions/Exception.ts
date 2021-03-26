import { FastifyReply } from "fastify"

export default class Exception extends Error {
  constructor(
    public message = "Internal Server Error",
    public kind = "INTERNAL"
  ) {
    super(`${kind}: ${message}`)
    this.name = "Exception"
  }

  toError() {
    return {
      success: false,
      error: {
        kind: "INTERNAL",
        message: "Internal Server Error",
      },
    }
  }

  sendError(res: FastifyReply) {
    return res.send(this.toError())
  }
}
