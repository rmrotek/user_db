import React from 'react';
import { Grid, Typography, Button, TextField } from '@material-ui/core';
import { Formik } from 'formik';


let AddUserForm = ({ history }) => {
  return (
    <Formik
    initialValues={{ email: '', }}
      validate={values => {
        let errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleSubmit,
      isSubmitting,
      /* and other goodies */
    }) => (
    <form onSubmit={handleSubmit}>
    <Grid container justify='center'>
    
      <Grid container justify='center' item xl={11} lg={11} md={11} sm={11} xs={11} spacing={8} style={{ background: 'lightgrey' }}>
        <Grid item xl={11} lg={11} md={11} sm={11} xs={11}>
          <Typography variant='h4' align='center' >
            Add a User to Database
              </Typography>

        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={11} xs={11} >

          <Typography variant='h5' >
            Personal Data
              </Typography>
          <Typography variant='h6' >
            name:
              </Typography>
          <Typography variant='h6' >
            username:
              </Typography>
          <Typography variant='h6' >
          <TextField
            type="email"
            name="email"
            label='email'
            onChange={handleChange}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
              </Typography>
          <Typography variant='h6' >
            phone:
              </Typography>
          <Typography variant='h6' >
            website:
              </Typography>

        </Grid>

        <Grid item xl={5} lg={5} md={5} sm={11} xs={11}>

          <Typography variant='h5' >
            Address
              </Typography>
          <Typography variant='h6' >
            street:
              </Typography>
          <Typography variant='h6' >
            suite:
              </Typography>
          <Typography variant='h6' >
            city:
              </Typography>
          <Typography variant='h6' >
            zipcode:
              </Typography>

        </Grid>

        <Grid item xl={11} lg={11} md={11} sm={11} xs={11}>

          <Typography variant='h5' >
            Company
              </Typography>
          <Typography variant='h6' >
            name:
              </Typography>
          <Typography variant='h6' >
            catchPhrase:
              </Typography>
          <Typography variant='h6' >
            bs:
              </Typography>

        </Grid>
        <Grid container item xl={11} lg={11} md={11} sm={11} xs={11} justify='space-between'>
          <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
            <Button onClick={() => history.push('/')} fullWidth variant='outlined' color='primary' >Go Back</Button>
          </Grid>
          <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
            <Button type='submit' fullWidth variant='contained' color='primary'>Add User</Button>
          </Grid>

        </Grid>



      </Grid>
    </Grid>
    </form>
)}
    </Formik>
  )

};

export default AddUserForm;