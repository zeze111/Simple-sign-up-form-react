import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import signupReducer from './signupReducer';
import SignupForm from './SignupForm';
import './style.scss';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

const store = createStore(
  signupReducer,
  composeEnhancer(
    applyMiddleware(thunk)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div id="wrap">
          <Route path="/signup" component={SignupForm}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('app')
);
