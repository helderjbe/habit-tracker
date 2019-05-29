import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Container from '@material-ui/core/Container';

import NavBar from '../../components/NavBar/NavBar';
import Create from '../../components/Create/Create';
import Edit from '../../components/Edit/Edit';
import List from '../../components/List/List';

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <Container maxWidth="lg">
        <Switch>
          <Route path="/dashboard" exact component={List} />
          <Route path="/dashboard/create" component={Create} />
          <Route path="/dashboard/edit/:id" component={Edit} />
        </Switch>
      </Container>
    </>
  );
};

export default Dashboard;
