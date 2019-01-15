import React from 'react';
import { Grid, Typography, Button, TextField } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';

import { connect } from 'react-redux'
import { requestUserAdd } from "../../services"




let AddUserForm = ({ history, requestUserAdd }) => {
  return (
    <Formik
      initialValues={{ name: '', username: '', email: '', }}
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
          requestUserAdd(values).then(() => history.push('/'));
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
                  {'Add a User to Database'}
                </Typography>
              </Grid>
              <Grid item xl={6} lg={12} md={12} sm={11} xs={11} >

                <Typography variant='h6' align='center' >
                  <Field
                    name="name"
                    render={({ field, form: { isSubmitting } }) => (
                      <TextField {...field} disabled={isSubmitting} label='name' type="text" />
                    )}
                  />

                </Typography>

                <Typography variant='h6' align='center' >
                  <Field
                    name="username"
                    render={({ field, form: { isSubmitting } }) => (
                      <TextField {...field} disabled={isSubmitting} label='username' type="text" />
                    )}
                  />
                </Typography>

                <Typography variant='h6' align='center' >
                  <Field
                    name="email"
                    render={({ field, form: { isSubmitting } }) => (
                      <TextField {...field} disabled={isSubmitting} label='email' type="email" />
                    )}
                  />
                </Typography>

                <Typography variant='h6' align='center' color='secondary'>
                  {'Please fill in the fields, all are required'}
                </Typography>

                <Typography variant='h6' align='center' color='primary'>
                  {'Rest will be filled with placeholders, You can edit them later.'}
                </Typography>

              </Grid>
              <Grid container item xl={11} lg={11} md={11} sm={11} xs={11} justify='space-between'>
                <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                  <Button onClick={() => history.push('/')} fullWidth variant='outlined' color='primary' >Go Back</Button>
                </Grid>
                <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                  <Button type='submit' disabled={isSubmitting} fullWidth variant='contained' color='primary'>Add User</Button>
                </Grid>

              </Grid>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  )

};

const mapStateToProps = (state) => ({
  //

})

const mapDispatchToProps = {

  requestUserAdd
};


AddUserForm = connect(mapStateToProps, mapDispatchToProps)(AddUserForm)

export default AddUserForm;