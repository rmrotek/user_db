import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core'
import UserList from './UserList';
import UserListView from './UserListView';

class App extends Component {
  render() {
    return (
      <UserListView />
    );
  }
}

export default App;
