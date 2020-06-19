module.exports = {
  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  env: {
    browser: true,
    node: true,
    es6: true,
  },

  plugins: [
    'prettier',
    'lodash',
    'lodash-fp',
    'import',
    'redux-saga',
    'react',
    'react-hooks',
    'jsx-a11y',
  ],

  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:redux-saga/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:lodash/recommended',
    'plugin:prettier/recommended',
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'prettier/react',
  ],

  rules: {
    // Personal preference.
    'arrow-parens': [1, 'as-needed'],
    'arrow-body-style': 1,

    // VSCode format poorly with <>, use <React.Fragment> explicitedly instead
    'react/jsx-fragments': 0,

    // Spreading is necessary when styling components
    'react/jsx-props-no-spreading': 0,

    // PropTypes.object is necessary when writing components
    'react/forbid-prop-types': 0,

    'react-hooks/exhaustive-deps': 0,

    // Prefer explicit prop types declaration except on commonly used props:
    // - className: used as part of styled-component styling API https://material-ui.com/styles/basics/#styled-components-api
    // - children: React props for JSX children
    // - dispatch: redux store dispatch function for redux-connected components.
    'react/prop-types': [1, { ignore: ['children', 'className', 'dispatch'] }],

    'no-unused-expressions': [
      2,
      { allowShortCircuit: true, allowTernary: true },
    ],

    // Prefer full import (i.e: import _ from 'lodash') for consistency
    // babel-plugin-lodash has been setup to transfer import to cherry pick style
    // for performance
    'lodash/import-scope': [1, 'full'],

    // Downgrade this from error to warning because some API might have underscore
    // and this should not stop the CI process.
    //
    // Allow some variables due to external libraries
    'no-underscore-dangle': [
      1,
      { allow: ['_id', '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] },
    ],

    // This rule is disable since we are using lodash/fp instead.
    'lodash/prefer-lodash-method': 'off',

    'lodash-fp/consistent-compose': 'off',
    'lodash-fp/consistent-name': ['error', '_'],
    'lodash-fp/no-argumentless-calls': 'error',
    'lodash-fp/no-chain': 'error',
    'lodash-fp/no-extraneous-args': 'error',
    'lodash-fp/no-extraneous-function-wrapping': 'error',
    'lodash-fp/no-extraneous-iteratee-args': 'error',
    'lodash-fp/no-extraneous-partials': 'error',
    'lodash-fp/no-for-each': 'off',
    'lodash-fp/no-partial-of-curried': 'error',
    'lodash-fp/no-single-composition': 'error',
    'lodash-fp/no-submodule-destructuring': 'error',
    'lodash-fp/no-unused-result': 'error',
    'lodash-fp/prefer-compact': 'error',
    'lodash-fp/prefer-composition-grouping': 'error',
    'lodash-fp/prefer-constant': [
      'error',
      {
        arrowFunctions: false,
      },
    ],
    'lodash-fp/prefer-flat-map': 'error',
    'lodash-fp/prefer-get': 'error',
    'lodash-fp/prefer-identity': [
      'error',
      {
        arrowFunctions: false,
      },
    ],
    'lodash-fp/preferred-alias': 'off',
  },

  settings: {
    'import/resolver': {
      'eslint-import-resolver-webpack': {
        config: 'webpack.config.js',
        env: {
          NODE_ENV: 'development',
        },
      },
    },
  },
};
