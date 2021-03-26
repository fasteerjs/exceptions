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

# Installation

```shell
npm i @fasteerjs/exceptions
# or if you are using Yarn
yarn add @fasteerjs/exceptions
```

# Registering

This package has its own errorHandler
