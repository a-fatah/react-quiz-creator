import React from 'react';
import './style.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ContextProvider from './ContextProvider';
import Home from './Home';
import AddQuestion from './AddQuestion';
import AddChoice from './AddChoice';

export default function App() {
  return (
    <ContextProvider>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/addQuestion">
            <AddQuestion />
          </Route>
          <Route path="/addChoice">
            <AddChoice />
          </Route>
        </Switch>
      </Router>
    </ContextProvider>
  );
}
