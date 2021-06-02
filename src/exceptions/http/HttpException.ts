import Exception from "../Exception"

class HttpException extends Exception {
  constructor(
    message = "Internal Server Error",
    kind = "INTERNAL",
    code = 500
  ) {
    super(message, kind, code)
    this.name = "HttpException"
  }

  toError() {
    return {
      success: false,
      error: {
        kind: this.kind,
        message: this.message,
      },
    }
  }
}

export { HttpException }
export default HttpException
