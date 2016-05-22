import 'babel-polyfill';
import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from './header/toolbar';

const target = document.getElementById('app');

ReactDOM.render(<Header />, target);
