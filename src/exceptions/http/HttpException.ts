import Exception from "../Exception"

export default class HttpException extends Exception {
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
