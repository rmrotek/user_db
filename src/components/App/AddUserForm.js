import React from 'react';
import { Grid, Typography, Button, TextField } from '@material-ui/core';
import { Formik } from 'formik';


let AddUserForm = ({ history }) => {
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
        handleBlur
      }) => (
          <form onSubmit={handleSubmit}>
            <Grid container justify='center'>

              <Grid container justify='center' item xl={11} lg={11} md={11} sm={11} xs={11} spacing={8} style={{ background: 'lightgrey' }}>
                <Grid item xl={11} lg={11} md={11} sm={11} xs={11}>
                  <Typography variant='h4' align='center' >
                    {'Add a User to Database'}
                  </Typography>

                </Grid>
                <Grid item xl={6} lg={12} md={12} sm={11} xs={11} >

                  <Typography variant='h6' align='center' >
                    <TextField
                      error={errors.name && touched.name && true}
                      type="text"
                      name="name"
                      label='name'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                    
                  </Typography>

                  <Typography variant='h6' align='center' >
                    <TextField
                    error={errors.username && touched.username &&true}
                      type="text"
                      name="username"
                      label='username'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.username}
                    />
                  </Typography>

                  <Typography variant='h6' align='center' >
                    <TextField
                    error={errors.email && touched.email && true}
                      type="email"
                      name="email"
                      label='email'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
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
          </form>
        )}
    </Formik>
  )

};

export default AddUserForm;