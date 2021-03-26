import Exception from "../Exception"

class HttpException extends Exception {
  constructor(message = "INTERNAL", kind = "Internal Server Error") {
    super(message, kind)
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
