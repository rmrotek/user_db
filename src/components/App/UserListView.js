import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core'
import UserList from './UserList';

import { connect } from 'react-redux'
import { fetchUsers } from "../store/reducers/users";

let UserListView = ({ fetchUsers }) => {

  return (
    <Grid container justify='center' >
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Button onClick={() => fetchUsers()} variant='contained' color='primary'>Refresh List</Button>
        <Typography variant='h4' align='center' paragraph>
          List of users:
          </Typography>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <UserList />
      </Grid>
    </Grid>
  );

}

const mapStateToProps = (state) => ({
  //for later
})

const mapDispatchToProps = {
  fetchUsers
};

UserListView = connect(mapStateToProps, mapDispatchToProps)(UserListView)

export default UserListView;

