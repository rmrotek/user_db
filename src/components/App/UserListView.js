import React from 'react';
import { Grid, Typography } from '@material-ui/core'
import UserList from './UserList';

const UserListView = () => {
  
    return (
      <Grid container justify='center' >
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Typography variant='h4' align='center' paragraph>
            List of users:
          </Typography>
        </Grid>
        <Grid item xl={4} lg={4} md={4} sm={5} xs={12}>
          <UserList />
        </Grid>
      </Grid>
    );
  
}

export default UserListView;

