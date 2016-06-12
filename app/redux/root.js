import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { AppRouter } from './router';

export const Root = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
