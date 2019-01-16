import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core'
import UserList from '../UserList/UserList';

import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { fetchUsers } from "../../services";


const CustomLink = (props: any) => <Link to={`/addUser`} {...props}/>

type TProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps


let UserListView = ({ fetchUsers }: TProps) => {
  return (
    
    <Grid container justify='center'>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Button onClick={() => fetchUsers()} variant='contained' color='primary'>Refresh List</Button>
        <Button component={CustomLink} variant='contained' color='primary'>Add New User</Button>
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
  fetchUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(UserListView);

