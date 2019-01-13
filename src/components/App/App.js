import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import { Grid, Typography } from '@material-ui/core'
import UserListView from './UserListView';

import UserView from './UserView';

class App extends Component {
  render() {
    return (

      <Router>
        <Grid container justify='center' >
          <Route exact path="/" component={UserListView} />
          <Route exact path="/user" component={UserView} />
        </Grid>


      </Router>
    );
  }
}

export default App;
