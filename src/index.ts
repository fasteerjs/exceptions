import { Fasteer } from "@fasteerjs/fasteer"

const fasteerExceptions = (
  fasteer: Fasteer.Fasteer,
  errorHandler?: Fasteer.Config["errorHandler"]
) => {
  const handler = errorHandler ?? fasteer.fastify.errorHandler

  fasteer.fastify.setErrorHandler((err: any, req, res) => {
    if (err.sendError && typeof err.sendError === "function")
      return err.sendError(res)

    return handler.bind(fasteer.fastify)(err, req, res)
  })
}

export * from "./exceptions"

export default fasteerExceptions
