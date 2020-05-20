# StarterStack
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FAlexAegis%2Fstarter-stack.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FAlexAegis%2Fstarter-stack?ref=badge_shield)


## Requirements

- Latest **LTS** node. The bcrypt implentation relies on node-gyp. (which is only included in LTS releases) Check the `.nvmrc` for the recommended Node version.

## Stack ideas

TimescaleDB(PostgresSQL)
for the financial time series data

PostgresSQL
for the auth service

MongoDB
file/document storage (profile images)

## Plans

- use: <https://github.com/apollographql/apollo-angular/blob/master/packages/apollo-angular-link-persisted/README.md>

-check for auth: <https://github.com/apollographql/apollo-angular/blob/master/packages/apollo-angular-link-headers/README.md>

- check <https://github.com/apollographql/apollo-link>

- Currently it's an issue that extended tsconfigs are overwriting the parent "paths" attribute instead of extending it so all the used paths has to be defined on project level instead of workspace level.

- Find out what the tags do in the nx.json

Angular apps with NgRX and Apollo, using ngrx as a cache
Nest backend, connecting the two with ng universal
MySQL, TypeORM

Automatically generated swagger docs for the api

common library for the model

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Angular CLI power-ups for modern development.**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev)

[30-minute video showing all Nx features](https://nx.dev/getting-started/what-is-nx)

[Interactive Tutorial](https://nx.dev/tutorial/01-create-application)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, .etc as well as the devtools to test, and build projects as well.

Below are some plugins which you can add to your workspace:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@starter-stack/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to <http://localhost:4201/.> The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `npm run affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `npm run affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `npm run dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.


## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FAlexAegis%2Fstarter-stack.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FAlexAegis%2Fstarter-stack?ref=badge_large)