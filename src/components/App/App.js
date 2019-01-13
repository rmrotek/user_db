import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import { Grid, Typography, Button } from '@material-ui/core'
import UserListView from './UserListView';

import UserView from './UserView';

import { connect } from 'react-redux'
import { fetchUsers } from "../store/reducers/users";


class App extends Component {
  render() {
    return (

      <Router>
        <Grid container justify='center' >
          
          <Route exact path="/" component={UserListView} />
          <Route path="/users/:userId" component={UserView} />
        </Grid>


      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  //for later
})

const mapDispatchToProps = {
  fetchUsers
};

App = connect(mapStateToProps, mapDispatchToProps)(App)

export default App;
