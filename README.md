# Fasteer.js Exceptions

Exceptions for Fasteer.js

## Available Exceptions

- Exception
  - HttpException
    - ForbiddenException
      - RatelimitedException
    - UnauthorizedException
    - UserInputException
      - NotFoundException
    - ValidationException

## Features

- Sends appropriate error responses
  - no need for duplicating code
- You can make custom exceptions and handle the response with `sendError(reply: FastifyReply)` & `toError()`

## Getting started

### Installation

```shell
npm i @fasteerjs/exceptions
# or if you are using Yarn
yarn add @fasteerjs/exceptions
```

### Registering

This package has it's own error handler, which you can extend with your logic.

```ts
import { hookFastify } from "@fasteerjs/fasteer"
import { createExceptionHandler } from "@fasteerjs/exceptions"

const fasteer = hookFastify({
  // ... your options
  errorHandler: createExceptionHandler(),
})
```

or you can register it as a plugin:

```ts
import { hookFastify } from "@fasteerjs/fasteer"
import fasteerExceptions from "@fasteerjs/exceptions"

const fasteer = hookFastify({
  //
})

fasteer.plugin(fasteerExceptions())
```

Additionally, you can add your own error handler:

```ts
import { hookFastify } from "@fasteerjs/fasteer"
import fasteerExceptions, {
  createExceptionHandler,
} from "@fasteerjs/exceptions"

// BAD
const fasteer = hookFastify({
  errorHandler: (err, req, res) => {},
})

// GOOD
const fasteer = hookFastify({
  // err is in this case FasteerError
  errorHandler: createExceptionHandler({ errorHandler: (err, req, res) => {} }),
})

// GOOD
// works same as above
fasteer.plugin(fasteerExceptions({ errorHandler: (err, req, res) => {} }))
```

## Custom Exceptions

You can create custom exceptions by extending the `Exception` class (or other exceptions). In the `Exception` class, there are two functions: `toError()` and `sendError(res: FastifyReply)`:

- `toError` creates an object which will be sent as the response.
- The `sendError` function by default sends the return value of the `toError` function. You can change the logic if you need `FastifyReply`.

## TypeScript Types

### `FasteerError extends FastifyError`

`FasteerError` is `FastifyError` with added `isException()` function.
Additionally, there is a `FasteerExceptionError`, which also has the the properties of `Exception`.

### `FasteerExceptionError`

This is `FasteerError` combined with `Exception`.

# License

This project is licensed under the MIT license.

<hr>

2021 &copy; Mia (Filip Vottus) &ndash; All rights reserved
