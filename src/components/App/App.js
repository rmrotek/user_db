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
          <Button onClick={() => this.props.fetchUsers()}>Refresh List</Button>
          <Route exact path="/" component={UserListView} />
          <Route exact path="/user" component={UserView} />
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
