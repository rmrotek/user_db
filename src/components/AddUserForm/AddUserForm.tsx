import React from 'react';
import { connect } from 'react-redux'

import { Grid, Typography, Button, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { ArrowBack } from '@material-ui/icons';

import { History } from 'history';

import { requestUserAdd } from "../../services"

import { Formik, Form, Field, FieldProps } from 'formik';

export interface FormValues {
  name: string;
  username: string;
  email: string;
}

type TProps = { history: History } & ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps


//fix TProps/service types before typing, chaining does not work 
let AddUserForm = ({ history, requestUserAdd }: any) => {
  return (
    <Formik
      initialValues={{ name: '', username: '', email: '' }}
      validate={(values: FormValues) => {
        let errors: any
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

            <Grid container justify='center' item xl={6} lg={6} md={6} sm={11} xs={11} spacing={8} className={'bg-gradient'}>
              <Grid item xl={11} lg={11} md={11} sm={11} xs={11}>
                <Typography variant='h4' align='center' >
                  {'Add a User to Database'}
                </Typography>
              </Grid>
              <Grid item xl={6} lg={6} md={6} sm={6} xs={9} >
                <Typography variant='h6' align='center'  >
                  <Field
                    name="name"
                    render={({ field, form: { isSubmitting } }: FieldProps<FormValues>) => (
                      <TextField {...field} disabled={isSubmitting} label='name' type="text" variant='outlined' margin='dense' fullWidth required/>
                    )}
                  />
                </Typography>

                <Typography variant='h6' align='center'  >
                  <Field
                    name="username"
                    render={({ field, form: { isSubmitting } }: FieldProps<FormValues>) => (
                      <TextField {...field} disabled={isSubmitting} label='username' type="text" variant='outlined' margin='dense' fullWidth required/>
                    )}
                  />
                </Typography>

                <Typography variant='h6' align='center'  >
                  <Field
                    name="email"
                    render={({ field, form: { isSubmitting } }: FieldProps<FormValues>) => (
                      <TextField {...field} disabled={isSubmitting} label='email' type="email" variant='outlined' margin='dense' fullWidth required/>
                    )}
                  />
                </Typography>
              </Grid>

              <Grid item xl={11} lg={11} md={11} sm={11} xs={11} >
                <Typography variant='h6' align='center' color='error'>
                  {'Please fill in the fields, all are required'}
                </Typography>

                <Typography variant='h6' align='center' color='primary'>
                  {'Rest will be filled with placeholders, You can edit them later.'}
                </Typography>

              </Grid>
              <Grid container item xl={11} lg={11} md={11} sm={11} xs={11} justify='space-between'>
                <Grid item xl={4} lg={4} md={4} sm={5} xs={6}>
                  <Button onClick={() => history.push('/')} fullWidth variant='outlined' color='primary' ><ArrowBack /> Go Back</Button>
                </Grid>
                <Grid item xl={4} lg={4} md={4} sm={5} xs={6}>
                  <Button type='submit' disabled={isSubmitting} fullWidth variant='contained' color='primary'>Add User <AddIcon /></Button>
                </Grid>

              </Grid>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  )

};

const mapStateToProps = () => ({
  //

})

const mapDispatchToProps = {

  requestUserAdd
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUserForm);