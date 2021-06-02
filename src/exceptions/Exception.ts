import { FastifyReply } from "fastify"

class Exception extends Error {
  constructor(
    public message = "Internal Server Error",
    public kind = "INTERNAL",
    public code = 500
  ) {
    super(`${kind} (${code}): ${message}`)
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
    res.code(this.code)
    return res.send(this.toError())
  }
}

export { Exception }
export default Exception
