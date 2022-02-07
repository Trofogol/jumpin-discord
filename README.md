# JumpIn Discord bot

This is a Discord bot that supposed to communicate with JumpIn project via API

## How to run

### Prerequisites

- Node.js installed
- TypeScript installed (via `npm`)
- Git installed

### Preparations

1. Clone this repo

1. Change working directory to it

    `cd jumpin-discord`

1. Install dependencies

    `npm install --production`

1. Add Discord bot token and client ID into first lines of `src/main.ts` file

1. Compile (generate .js files)

    `tsc`

### Run

`node dist/main.js`

or

`nodemon dist/main.js`