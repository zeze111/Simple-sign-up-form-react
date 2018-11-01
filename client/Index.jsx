import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { store } from './store';
import SignupForm from './SignupForm';
import './style.scss';


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
