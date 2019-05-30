import React from 'react';
import ReactDOM from 'react-dom';

import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import grey from '@material-ui/core/colors/grey';

import CssBaseline from '@material-ui/core/CssBaseline';

import * as serviceWorker from './serviceWorker';

import App from './App';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          height: '100%'
        },
        body: {
          height: '100%',
          background: `linear-gradient(-45deg, #000, ${grey[700]}, #000)`,
          'background-size': '400% 400%',
          animation: 'Gradient 15s ease infinite'
        },
        '@keyframes Gradient': {
          '0%': {
            'background-position': '0% 50%'
          },
          '50%': {
            'background-position': '100% 50%'
          },
          '100%': {
            'background-position': '0% 50%'
          }
        }
      }
    }
  }
});

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
