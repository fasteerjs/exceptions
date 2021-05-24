import { Fasteer } from "@fasteerjs/fasteer"
import {
  FastifyInstance,
  FastifyRequest,
  FastifyReply,
  FastifyError,
} from "fastify"
import { Exception, NotFoundException } from "./exceptions"

interface CreateExceptionHandler {
  /**
   * Custom Error Handler that gets executed
   * as the last step of the exception handler.
   */
  errorHandler?: (
    err: FasteerError,
    req: FastifyRequest,
    res: FastifyReply
  ) => unknown
}

/**
 * Custom FasteerError type that is the FastifyError
 * combined with the `isException` function.
 */
interface FasteerError extends FastifyError {
  isException(): this is FasteerExceptionError
}

/**
 * The FasteerError combined with the Exception
 */
type FasteerExceptionError = FasteerError & Exception

/**
 * Exception Handler
 *
 * If an exception contains a {@function sendError(res)} function,
 * it is executed, and a property `err.isException` is set to `true`,
 * otherwise `err.isException` is set to `false`.
 *
 * @param {CreateExceptionHandler} options Options
 * @returns
 */
const createExceptionHandler =
  ({ errorHandler }: CreateExceptionHandler): FastifyInstance["errorHandler"] =>
  (err: any, req, res) => {
    const isException = () =>
      err.sendError && typeof err.sendError === "function"

    err.isException = isException

    if (isException()) err.sendError(res)

    return errorHandler?.(err, req, res)
  }

const notFoundHandler: Parameters<FastifyInstance["setNotFoundHandler"]>[0] =
  () => {
    throw new NotFoundException()
  }

const fasteerExceptions =
  (options: CreateExceptionHandler) => (fasteer: Fasteer.Fasteer) => {
    fasteer.fastify.setNotFoundHandler(notFoundHandler)
    fasteer.fastify.setErrorHandler(createExceptionHandler(options))
  }

export * from "./exceptions"

export {
  createExceptionHandler,
  fasteerExceptions,
  CreateExceptionHandler,
  FasteerError,
  FasteerExceptionError,
  notFoundHandler,
}

export default fasteerExceptions
