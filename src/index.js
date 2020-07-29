import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';

// load bootstrap js
import 'bootstrap';
// load boostrap stylings
import './scss/app.scss';

ReactDOM.render(
  <Router>
    <App/>
  </Router>,
  document.getElementById('root')
);
