/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import ViewStrings from '../ViewStringsPage';

import GlobalStyle from '../../global-styles';
import NewStringPage from '../NewStringPage';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ViewStrings} />
        <Route exact path="/addString" component={NewStringPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
