import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import signupReducer from './signupReducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

export const store = createStore(
  signupReducer,
  composeEnhancer(
    applyMiddleware(thunk)
  )
);
