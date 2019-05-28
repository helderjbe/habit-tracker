import React from 'react';

import Particles from 'react-particles-js';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import NavBar from './components/NavBar/NavBar';

import Create from './components/Create/Create';
import Edit from './components/Edit/Edit';
import List from './components/List/List';

const App = () => {
  // TODO: make almost all variables in particle random and you're set for this
  // copy particles to function for cleanness
  return (
    <Router>
      <Particles
        params={{
          particles: {
            number: {
              value: 50
            },
            size: {
              value: 3
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'repulse'
              }
            }
          }
        }}
        style={{
          width: '100%',
          background: `rgb(${Math.round(60 * Math.random())}, ${Math.round(
            60 * Math.random()
          )}, ${Math.round(60 * Math.random())})`,
          position: 'absolute',
          zIndex: -1
        }}
      />
      <NavBar />
      <Container maxWidth="lg">
        <Route path="/" exact component={List} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/create" component={Create} />
      </Container>
    </Router>
  );
};

export default App;
