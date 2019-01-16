import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import { requestUserDelete } from "../../services"
import { IUsers } from '../../store/reducers/users';

import { Grid, Typography, Button } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit'

interface MatchParamsProps {
  userId: string
}

export interface MatchProps {
  params: MatchParamsProps
}

interface Props {
  users: IUsers[];
  match: MatchProps;
  history: any;
  requestUserDelete: any
}

export const CustomLink = (props: any) => <Link to={props.id} {...props} />

type TProps = { history: History, match: MatchProps } & ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

//fix TProps/service types before typing, chaining does not work 

let UserView = ({ users, match, history, requestUserDelete }: any) => {
  const userId = parseInt(match.params.userId);
  const user = users && users.find((user: IUsers) => user.id === userId)
  let userView;

  if (user) {
    userView = (
      <Grid container justify='center' item xl={6} lg={6} md={6} sm={11} xs={11} spacing={8} className={'bg-gradient'}>
        <Grid item xl={11} lg={11} md={11} sm={11} xs={11}>
          <Typography variant='h4' align='center' paragraph>
            {`${user.name} Profile Page`}
          </Typography>
        </Grid>

        <Grid item xl={6} lg={6} md={6} sm={11} xs={11}  >
        <Typography paragraph align='center'>
            <img src={process.env.PUBLIC_URL + '/media/profile-image-placeholder.png'} alt='user avatar' style={{ width: 250, height: 250 }} />
          </Typography>

        </Grid>
        <Grid container item xl={6} lg={6} md={6} sm={11} xs={11} >
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12} >
            <Typography variant='h5' >
              {'Personal Data'}
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
            <Typography variant='h6' paragraph>
              website: {user.website}
            </Typography>
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Typography variant='h5' >
              {'Address'}
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
            <Typography variant='h6' paragraph>
              zipcode: {user.address.zipcode}
            </Typography>
          </Grid>

          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Typography variant='h5' >
              {'Company'}
            </Typography>
            <Typography variant='h6' >
              name: {user.company.name}
            </Typography>
            <Typography variant='h6' >
              catchPhrase: {user.company.catchPhrase}
            </Typography>
            <Typography variant='h6' paragraph >
              bs: {user.company.bs}
            </Typography>
          </Grid>

        </Grid>
        <Grid container item xl={11} lg={11} md={11} sm={11} xs={11} justify='space-between'>
          <Grid item xl={1} lg={1} md={2} sm={2} xs={3}>
            <Button onClick={() => history.push('/')} fullWidth variant='outlined' color='primary' ><ArrowBack /></Button>
          </Grid>
          <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
            <Button component={CustomLink} id={`/users/${userId}/edit`} fullWidth variant='contained' color='primary'><EditIcon /> </Button>
          </Grid>
          <Grid item xl={1} lg={1} md={2} sm={2} xs={3}>
            <Button onClick={() => requestUserDelete(user.id).then(() => history.push('/'))} fullWidth variant='contained' color='secondary'><DeleteIcon /></Button>
          </Grid>
        </Grid>
      </Grid>
    )
  } else {
    userView = (
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        loading
      </Grid>
    )
  }
  return (
    <Grid container justify='center' >
      {userView}
    </Grid>
  )

};

const mapStateToProps = (state: any) => ({
  users: state.usersData.users,
})

const mapDispatchToProps = {
  requestUserDelete
};


export default connect(mapStateToProps, mapDispatchToProps)(UserView);

