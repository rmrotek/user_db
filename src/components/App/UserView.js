import React from 'react';

import { connect } from 'react-redux'
import { Grid, Typography, Button } from '@material-ui/core';

import { requestUserDelete } from "../../store/reducers/users"
import { Link } from 'react-router-dom';






let UserView = ({ users, match, history, requestUserDelete }) => {
  const userId = parseInt(match.params.userId);
  const user = users && users.find(user => user.id === userId)
  let editMode = false

  if (user) {
    return (
      <Grid container 
        justify='center'
      >
        
          <Grid container justify='center' item xl={11} lg={11} md={11} sm={11} xs={11} spacing={8} style={{background: 'lightgrey'}}>
            <Grid item xl={11} lg={11} md={11} sm={11} xs={11}>
              <Typography variant='h4' align='center' >
                User Profile Page
              </Typography>

            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={11} xs={11} >

              <Typography variant='h5' >
                Personal Data
              </Typography>
              <Typography variant='h6' >
                name: {user.name}
              </Typography>
              <Typography variant='h6' >
                username: {user.username}
              </Typography>
              <Typography variant='h6' >
                e-mail: {user.email}
              </Typography>
              <Typography variant='h6' >
                phone: {user.phone}
              </Typography>
              <Typography variant='h6' >
                website: {user.website}
              </Typography>

            </Grid>

            <Grid item xl={5} lg={5} md={5} sm={11} xs={11}>

              <Typography variant='h5' >
                Address
              </Typography>
              <Typography variant='h6' >
                street: {user.address.street}
              </Typography>
              <Typography variant='h6' >
                suite: {user.address.suite}
              </Typography>
              <Typography variant='h6' >
                city: {user.address.city}
              </Typography>
              <Typography variant='h6' >
                zipcode: {user.address.zipcode}
              </Typography>

            </Grid>

            <Grid item xl={11} lg={11} md={11} sm={11} xs={11}>

              <Typography variant='h5' >
                Company
              </Typography>
              <Typography variant='h6' >
                name: {user.company.name}
              </Typography>
              <Typography variant='h6' >
                catchPhrase: {user.company.catchPhrase}
              </Typography>
              <Typography variant='h6' >
                bs: {user.company.bs}
              </Typography>

            </Grid>
            <Grid container item xl={11} lg={11} md={11} sm={11} xs={11} justify='space-between'>
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                <Button onClick={() => history.push('/')} fullWidth variant='outlined' color='primary' >Go Back</Button>
              </Grid>
              <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                <Button  fullWidth variant='contained' color='primary'>Edit User</Button>
              </Grid>
              <Grid item xl={2} lg={2} md={2} sm={12} xs={12}>
                <Button onClick={() => requestUserDelete(user.id).then(() => history.push('/'))} fullWidth variant='contained' color='secondary'>Delete User</Button>
              </Grid>
            </Grid>



          </Grid>
        
      </Grid>
    )
  }
  return (
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
      loading
      </Grid>
  )




};

const mapStateToProps = (state) => ({
  users: state.usersData.users,

})

const mapDispatchToProps = {
  
  requestUserDelete
};

UserView = connect(mapStateToProps, mapDispatchToProps)(UserView)

export default UserView;

