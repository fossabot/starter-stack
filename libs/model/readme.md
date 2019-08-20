# Model

This library was generated with [Nx](https://nx.dev).

## Issues

TypeORM inherently requires you to define circular dependencies when defining ManyToOne, OneToMany and ManyToMany relations since both ends have to reference the other. The issue with this is that while TypeORMs decoratorsetups are work as forwardrefs, the typescript typings require the imports to be available immediately. So using an interface to substantiate the entity in the type is required because of webpack.

## Running unit tests

Run `ng test model` to execute the unit tests via [Jest](https://jestjs.io).
