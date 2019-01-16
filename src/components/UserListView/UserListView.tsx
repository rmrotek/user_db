import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core'
import UserList from '../UserList/UserList';

import { connect } from 'react-redux'




type TProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps


let UserListView = ({}: TProps) => {
  return (
    
    <Grid container justify='center'>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        
        <Typography variant='h4' align='center' paragraph>
          List of users:
          </Typography>
      </Grid>
      <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
        <UserList />
      </Grid>
    </Grid>
    
  );

}

const mapStateToProps = () => ({
  //for later
})

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(UserListView);

