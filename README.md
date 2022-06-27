# Node Express App - Bored

TH Bored app is a small project to map `bored api response`.

Inside of this repoistory you will find **express** based web application for **Node.js** runtime. It’s built on **TypeScript**

### Main features:

- 🚄 [ExpressJS](http://expressjs.com) framework with [TypeScript](https://www.typescriptlang.org/) on the board
- ♻️ Live reload
- 🏇 minified and optimized code for production build
- ✏️ Linting via [ESLint](https://eslint.org) with Airbnb configuration
- 🚑 Code Formatter with [Prettier](https://prettier.io)
- 📘 VSCode configuration: Debug, Settings, Tasks and extension for ESLint, Prettier, TypeScript

## Getting started

Note: you need to set env variables defined in `.env.local` file.

1. Clone this repo:

2. Install dependencies:

```
npm install
```

3. Run server in dev mode:

```
npm run start:dev
```

## How to work with the APP

1. Enviromment variables - define your envs in `.env.local` file and provide validation rules for them inside `@config/config.ts` file.
2. Define your routung inside `api.ts` fiile.
3. Describe your newly created API inside `swagger.json` file

## Testing

The Jest test suites are run by executing

```sh
npm test
```

## Code linting

Run code quality analysis using

```sh
npm run lint
```

## Fixing problems

Automatically fix linter's problems

```sh
npm run lint:fix
```

## Logging

```javascript
import logger from "@core/utils/logger";

logger.error("message"); // level 0
logger.warn("message"); // level 1
logger.info("message"); // level 2
logger.http("message"); // level 3
logger.verbose("message"); // level 4
logger.debug("message"); // level 5
logger.silly("message"); // level 6
```

In development mode, log messages of all severity levels will be printed to the console.
In production mode, only `info`, `warn`, and `error` logs will be printed to the console.

Note: API request information (request url, response code, timestamp, etc.) are also automatically logged (using [morgan](https://github.com/expressjs/morgan)).
