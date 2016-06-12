import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Wrap, Header } from './../wrap';

const NotFound = () =>
  <div>Route not found</div>;

export const AppRouter = () =>
  <Router history={browserHistory}>
    <Route path="/" component={Wrap}>
      <IndexRoute component={Header} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>;
