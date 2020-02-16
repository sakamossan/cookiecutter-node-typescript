# cookiecutter-node-typescript

Boilerplate for TypeScript and Node.js.
Edit it however you see necessary.

## Features

`Typescript`, `Prettier`, `Jest`, `Eslint`, `GitHub Actions`, `Coveralls`, `SonarQube`.

**Note**:

1. for `Coveralls` to work you must set the `COVERALLS_REPO_TOKEN` environment
   variable under `Secrets`, otherwise remove `:coverage` from `yarn test` on `.github/workflows/config.yml`.
2. for `SonarQube` to work you must set the `SONAR_TOKEN` and `SONAR_HOST` environment
   variables under `Secrets`, otherwise comment or remove the `quality` job from `.github/workflows/config.yml`.
3. for `public` npm packages you must set the `private` variable on `package.json`
   to `false` or remove it, otherwise, for `private` projects remove or edit the `publish` job from `.github/workflows/config.yml`.

## Installation

Install cookiecutter:

```
$ sudo apt install cookiecutter
```

Create a new repo:

```
$ cookiecutter git@github.com:Sighmir/cookiecutter-node-typescript
```
