import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import smoothScroll from 'smoothscroll-polyfill';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import './styles/index.scss';

smoothScroll.polyfill();

ReactDOM.render(
  <React.StrictMode>
     <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

