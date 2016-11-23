/*jshint esversion: 6 */

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

// Stylesheets
require('./style/app.scss');

ReactDOM.render( <App />, document.querySelector('.container'));
