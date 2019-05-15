import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import NavBar from './components/NavBar/NavBar';

import Create from './components/Create/Create';
import Edit from './components/Edit/Edit';
import List from './components/List/List';

function App() {
  return (
    <Router>
      <NavBar />
      <Container maxWidth="lg">
        <Route path="/" exact component={List} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/create" component={Create} />
      </Container>
    </Router>
  );
}

export default App;
