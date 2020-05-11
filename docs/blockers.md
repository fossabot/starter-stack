# Blockers

## Node ES Modules

Webpack currently can't output native ES modules. Until
[Webpack 5](https://github.com/webpack/webpack/projects/5) releases, it's not
possible to set

```json
{
  "type": "module"
}
```

in `package.json`.
