import 'babel-polyfill';
import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from './redux/root';

const target = document.getElementById('app');

ReactDOM.render(<Root />, target);
