import React from 'react';
import { Grid, Typography, Button, TextField } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';

import { connect } from 'react-redux'
import { requestUserEdit } from "../../store/reducers/users"
import { Link } from 'react-router-dom';




let EditUserForm = ({ users, match, requestUserEdit, history }) => {
  const userId = parseInt(match.params.userId);
  const user = users && users.find(user => user.id === userId)

  let editUserView = '';

  if (user) {
    editUserView = (
      <Formik
        initialValues={{
          name: user.name,
          username: user.username,
          email: user.email,
          phone: user.phone,
          website: user.website,
          street: user.address.street,
          suite: user.address.suite,
          city: user.address.city,
          zipcode: user.address.zipcode,
          companyName: user.company.name,
          companyCatchPhrase: user.company.catchPhrase,
          companyBs: user.company.bs,
          geoLat: user.address.geo.lat,
          geoLng: user.address.geo.lng
        }}
        validate={values => {
          let errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          if (!values.name) {
            errors.name = 'Required';
          }
          if (!values.username) {
            errors.username = 'Required';
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            requestUserEdit(values, user.id).then(() => history.goBack());
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form >
            <Grid container justify='center'>
              <Grid container justify='center' item xl={11} lg={11} md={11} sm={11} xs={11} spacing={8} style={{ background: 'lightgrey' }}>
                <Grid item xl={11} lg={11} md={11} sm={11} xs={11}>
                  <Typography variant='h4' align='center' >
                    {'User Profile Page'}
                  </Typography>
                </Grid>

                <Grid item xl={6} lg={6} md={6} sm={11} xs={11} >
                  <Typography variant='h5' >
                    {'Personal Data'}
                  </Typography>
                  <Typography variant='h6' >
                    <Field
                      name="name"
                      render={({ field, form: { isSubmitting } }) => (
                        <TextField {...field} disabled={isSubmitting} label='name' margin='dense' variant='outlined' type="text" fullWidth />
                      )}
                    />
                  </Typography>
                  <Typography variant='h6' >
                    <Field
                      name="username"
                      render={({ field, form: { isSubmitting } }) => (
                        <TextField {...field} disabled={isSubmitting} label='username' margin='dense' variant='outlined' type="text" fullWidth />
                      )}
                    />
                  </Typography>
                  <Typography variant='h6' >
                    <Field
                      name="email"
                      render={({ field, form: { isSubmitting } }) => (
                        <TextField {...field} disabled={isSubmitting} label='email' margin='dense' variant='outlined' type="email" fullWidth />
                      )}
                    />
                  </Typography>
                  <Field
                    name="phone"
                    render={({ field, form: { isSubmitting } }) => (
                      <TextField {...field} disabled={isSubmitting} label='phone' margin='dense' variant='outlined' type="text" fullWidth />
                    )}
                  />
                  <Typography variant='h6' >
                    <Field
                      name="website"
                      render={({ field, form: { isSubmitting } }) => (
                        <TextField {...field} disabled={isSubmitting} label='website' margin='dense' variant='outlined' type="text" fullWidth />
                      )}
                    />
                  </Typography>
                </Grid>

                <Grid item xl={5} lg={5} md={5} sm={11} xs={11}>
                  <Typography variant='h5' >
                    {'Address'}
                  </Typography>
                  <Field
                    name="street"
                    render={({ field, form: { isSubmitting } }) => (
                      <TextField {...field} disabled={isSubmitting} label='street' margin='dense' variant='outlined' type="text" fullWidth />
                    )}
                  />
                  <Typography variant='h6' >
                    <Field
                      name="suite"
                      render={({ field, form: { isSubmitting } }) => (
                        <TextField {...field} disabled={isSubmitting} label='suite' margin='dense' variant='outlined' type="text" fullWidth />
                      )}
                    />
                  </Typography>
                  <Typography variant='h6' >
                    <Field
                      name="city"
                      render={({ field, form: { isSubmitting } }) => (
                        <TextField {...field} disabled={isSubmitting} label='city' margin='dense' variant='outlined' type="text" fullWidth />
                      )}
                    />
                  </Typography>
                  <Typography variant='h6' >
                    <Field
                      name="zipcode"
                      render={({ field, form: { isSubmitting } }) => (
                        <TextField {...field} disabled={isSubmitting} label='zipcode' margin='dense' variant='outlined' type="text" fullWidth />
                      )}
                    />
                  </Typography>
                </Grid>

                <Grid item xl={6} lg={6} md={6} sm={11} xs={11}>
                  <Typography variant='h5' >
                    {'Company'}
                  </Typography>
                  <Typography variant='h6' >
                    <Field
                      name="companyName"
                      render={({ field, form: { isSubmitting } }) => (
                        <TextField {...field} disabled={isSubmitting} label='name' margin='dense' variant='outlined' type="text" fullWidth />
                      )}
                    />
                  </Typography>
                  <Typography variant='h6' >
                    <Field
                      name="companyCatchPhrase"
                      render={({ field, form: { isSubmitting } }) => (
                        <TextField {...field} disabled={isSubmitting} label='catch phrase' margin='dense' variant='outlined' type="text" fullWidth />
                      )}
                    />
                  </Typography>
                  <Typography variant='h6' >
                    <Field
                      name="companyBs"
                      render={({ field, form: { isSubmitting } }) => (
                        <TextField {...field} disabled={isSubmitting} label='BS' margin='dense' variant='outlined' type="text" fullWidth />
                      )}
                    />
                  </Typography>
                </Grid>

                <Grid container item xl={11} lg={11} md={11} sm={11} xs={11} justify='space-between'>
                  <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                    <Button onClick={() => history.goBack()} fullWidth variant='outlined' color='primary' >Go Back</Button>
                  </Grid>
                  <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                    <Button type='submit' disabled={isSubmitting} fullWidth variant='contained' color='primary'>Edit User</Button>
                  </Grid>
                  <Grid item xl={2} lg={2} md={2} sm={12} xs={12}>
                    <Button disabled fullWidth variant='contained' color='secondary'>Delete User</Button>
                  </Grid>
                </Grid>
                
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>)
  } else {
    editUserView = (
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        loading
      </Grid>
    )
  }

  return (
    <Grid container justify='center' >
      {editUserView}
    </Grid>
  )
};

const mapStateToProps = (state) => ({
  users: state.usersData.users,

})

const mapDispatchToProps = {
  requestUserEdit

};


EditUserForm = connect(mapStateToProps, mapDispatchToProps)(EditUserForm)

export default EditUserForm;