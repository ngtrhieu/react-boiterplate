import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import 'sanitize.css/sanitize.css'; // Provide standard cross-brower default css
import 'typeface-roboto'; // Material-ui main typefont.

import './icons'; // Build the library of fa-icons used.

import theme from './theme';
import App from '~/containers/App';

const DOM_NODE = document.getElementById('react-container');
if (DOM_NODE) {
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>,
    DOM_NODE,
  );
}
