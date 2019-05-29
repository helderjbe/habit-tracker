import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from './containers/Dashboard/Dashboard';
import Landing from './containers/Landing/Landing';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
