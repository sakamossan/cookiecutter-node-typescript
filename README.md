# cookiecutter-node-typescript

Cookiecutter for Node.js with Typescript, Webpack, Eslint, Jest, Prettier, GitHub Actions, Coveralls and SonarQube.

## Features

`Typescript`, `Webpack`, `Prettier`, `Jest`, `Eslint`, `GitHub Actions`, `Codecov`, `SonarQube`.

**Note**:

1. for `Codecov` to work you must set the `CODECOV_TOKEN` environment
   variable under `Secrets`, otherwise remove `:codecov` from `yarn test` on `.github/workflows/config.yml`.
2. for `SonarQube` to work you must set the `SONAR_TOKEN` and `SONAR_HOST` environment
   variables under `Secrets`, otherwise comment or remove the `quality` job from `.github/workflows/config.yml`.
3. to `publish` from the pipeline you must set the `NPM_TOKEN` environment
   variables under `Secrets`, otherwise comment or remove the `publish` job from `.github/workflows/config.yml`.

## Installation

Install cookiecutter:

```
$ pip install --user cookiecutter
```

Create a new repo:

```
$ cookiecutter git@github.com:Sighmir/cookiecutter-node-typescript
```
