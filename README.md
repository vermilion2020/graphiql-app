# graphQL

## Technologies used in the project:

- React
- Redux
- Typescript
- Vite
- RTK
- Firebase
- Tailwind
- GraphQL
- Vitest

## deploy:

[Link to Netlify](https://graphiql-app-last-of-us.netlify.app/main)

## graphQL:

[Documentation](https://graphql.org/)

## Enviroment

For proper local work, environment variables with firebase settings should be set.
Example for .env file is ./example.env

## Commands (use 'npm run ...' to execute):

- dev
  - vite
- build
  - tsc && vite build
- lint
  - tsc --noEmit && eslint ./src --ext ts,tsx --report-unused-disable-directives --max-warnings 0
- fix
  - prettier . --write --color
- prepare
  - husky install
- test
  - vitest run --coverage
