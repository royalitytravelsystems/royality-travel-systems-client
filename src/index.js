import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './assets/stylesheets/index.css';

const render = Component => {
  ReactDOM.render(
    <BrowserRouter>
      <Component />
    </BrowserRouter>,
    document.getElementById('root'),
  );
};

render(App);
