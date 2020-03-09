/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { ThemeProvider } from '@material-ui/styles';
// eslint-disable-next-line no-unused-vars
import { CssBaseline } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { fromJS } from 'immutable';
// eslint-disable-next-line no-unused-vars
import Themes from './themes';

import routes from './routes';
import Root from './Root';
import configureStore from './redux/configureStore';
import { history } from './app-history';
import { LayoutProvider } from './context/LayoutContext';
import { UserProvider } from './context/UserContext';


/**
  * Author : Riki Setiyo Pambudi - Setiyoriki589@gmail.com
*/

let initialState = {}

// rehydrate initialState for JS app
if (window.__INITIAL_STATE__) {
  initialState = window.__INITIAL_STATE__

  // Transform into Immutable.js collections,
  // but leave top level keys untouched for Redux
  Object.keys(initialState).forEach((key) => {
    initialState[key] = fromJS(initialState[key])
  })
}

const store = configureStore(initialState, history)

// Render the React application to the DOM
// Root component is to bootstrap Provider, Router and DevTools
ReactDOM.render(
  <LayoutProvider>
    <UserProvider>
      <ThemeProvider theme={Themes.default}>
        <CssBaseline />
        <Root history={history} routes={routes} store={store} />
      </ThemeProvider>
    </UserProvider>
  </LayoutProvider>,
  document.getElementById('app-container')
)
