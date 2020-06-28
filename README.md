# boilerplate for ReactJS

<div align="center">
<a href="https://conventionalcommits.org"><img src="https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg" /></a>
</div>

## Credits

Heavily inspired (with some scripts blantantly copied) from [Max Stoiber](https://twitter.com/mxstbr)'s [React boilerplate](https://github.com/react-boilerplate/react-boilerplate/blob/master/package.json).

## Motivation

This is a simple React project boilerplate meant for beginner users who have at least gone through a few React tutorials and want to experience writing React codes.

Therefore, my goal is to provide a vscode/prettier/eslint pre-configured environment so that learners can consult with intellisense, eslint and prettier on their journey to conquer React.

If you are looking for a production-grade boilerplate, check out [Max Stoiber](https://twitter.com/mxstbr)'s [React boilerplate](https://github.com/react-boilerplate/react-boilerplate/blob/master/package.json) instead

## Development environment

The project come pre-configured with:

1. **Babel/Webpack**: standard production-ready code transpiling and bundling environment. 

2. **Eslint/Prettier**: spotting problems, enforcing standard coding style. Your beacon for the otherwise lawless place (urgh, Javascript...).

3. **React/ReactDOM**: just because this is a React boilerplate.

4. **Commitizen**: for enforcing [conventional commits](https://conventionalcommits.org) standard.

5. Others goodness: axios, lodash/fp, winston, etc... just because they are good.

However, since this boilerplate is meant to be a React learning environment, I have omitted some standard React tools/libraries such as:

1. **ReactRouter**: Now I am rethinking it, I should have included this.

2. **Redux/Saga/Reselect**: Skipped since these require quite a big of learning and only trully useful for app that have complicated state. Can get away of using React hooks for simplier apps.

3. **Jest (or any testing framework)**: You don't really need to test your pet project do you?

While I skipped these libraries, I would strongly recommend these at your next steps to learn more about React development and its ecosystem. Guarantee it worth your while.

## Getting started

1. Make sure you have Node.js v12 and Yarn installed.

2. Clone this repository using `git clone --depth=1 <THIS_REPO_URL> <PROJECT_NAME>`

3. Run `yarn install` to install all dependencies.

4. Run `yarn start` to start your local webserver at `http://localhost:3000`.

5. Start writing your React codes and see changes reflected immediately on your browser.

## Getting around the project

### Yarn commands:

1. Start your local development: `yarn start`.

2. Build your project: `yarn build`. The project will be built to `dist` folder. You can also build production version by `yarn build:prod`.

3. Commit using `yarn commit` instead of `git commit` to help you constructing *conventional commit* valid commit message.

4. Release a new version with `yarn release`, which use [standard-version](https://github.com/conventional-changelog/standard-version) under the hood.

### Folder structure

- `src` folder is where all your code live. It is recommended to break your codes into `components` folder and `containers` folder, as described in this article [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.4rmjqneiw)

- `dist` folder is where Webpack will build your app. You can ignore codes in this folder.

- `internals` folder is where dev-environment related scripts are stored. Webpack configs are currently housed there. Scaffolding and/or build scripts will be put there in the future.

### Git problems?

If you have problems committing with Git, it is likely that you have linting problem, or your commit message not confronting to *conventional commit*. While I recommend you to take a look into these problems, you can just skip the whole checking process and commit with `-n` flag (i.e: `git commit -m <YOUR_COMMIT_MSG> -n`)

## Deployment

*to be written*




