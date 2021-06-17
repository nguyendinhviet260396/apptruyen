import React from 'react'
import { Field, reduxForm } from 'redux-form';
import Grid from '@material-ui/core/Grid';
import renderTextField from './../FormHelper/TextField';
import {Button} from '@material-ui/core';

let ContactForm = props => {
  const { handleSubmit} = props
  return (
        <form onSubmit={handleSubmit} className="mr-3 ml-3">   
            <Grid container spacing={1} style={{display:'flex',flexDirection:'row'}}>
                <Grid item  xs={6}>
                    <Field
                        id="min temperaturn"
                        label="min temperaturn"
                        name="min_temperaturn"
                        inputProps={{style: {fontSize: 15}}} // font size of input text
                        InputLabelProps={{style: {fontSize: 15}}} // font size of input label
                        type="text"
                        size="small"
                        margin="dense"
                        component={renderTextField}
                        />
                        <Field
                        id="min speed"
                        label="min speed"
                        name="min_speed"
                        inputProps={{style: {fontSize: 15}}} // font size of input text
                        InputLabelProps={{style: {fontSize: 15}}} // font size of input label
                        type="text"
                        size="small"
                        margin="none"
                        component={renderTextField}
                        />
                        <Field
                        id="min run "
                        label="min run "
                        name="min_run "
                        inputProps={{style: {fontSize: 15}}} // font size of input text
                        InputLabelProps={{style: {fontSize: 15}}} // font size of input label
                        type="text"
                        size="small"
                        margin="none"
                        component={renderTextField}
                        />
                        <Field
                        id="setup temperaturn"
                        label="setup temperaturn"
                        name="setup_temperaturn"
                        inputProps={{style: {fontSize: 15}}} // font size of input text
                        InputLabelProps={{style: {fontSize: 15}}} // font size of input label
                        type="text"
                        size="small"
                        margin="none"
                        component={renderTextField}
                        />
                </Grid>
                <Grid item  xs={6}>
                    <Field
                        id="max temperaturn"
                        label="max temperaturn"
                        name="max_temperaturn"
                        inputProps={{style: {fontSize: 15}}} // font size of input text
                        InputLabelProps={{style: {fontSize: 15}}} // font size of input label
                        type="text"
                        size="small"
                        margin="dense"
                        component={renderTextField}
                        />
                        <Field
                        id="max speed "
                        label="max speed "
                        name="max_speed "
                        inputProps={{style: {fontSize: 15}}} // font size of input text
                        InputLabelProps={{style: {fontSize: 15}}} // font size of input label
                        type="text"
                        size="small"
                        margin="none"
                        component={renderTextField}
                        />
                        <Field
                        id="min stop "
                        label="min stop "
                        name="min_stop "
                        inputProps={{style: {fontSize: 15}}} // font size of input text
                        InputLabelProps={{style: {fontSize: 15}}} // font size of input label
                        type="text"
                        size="small"
                        margin="none"
                        component={renderTextField}
                        />
                        <Field
                        id="reset temperaturn"
                        label="reset temperaturn"
                        name="reset_temperaturn"
                        inputProps={{style: {fontSize: 15}}} // font size of input text
                        InputLabelProps={{style: {fontSize: 15}}} // font size of input label
                        type="text"
                        size="small"
                        margin="none"
                        component={renderTextField}
                        />
                </Grid>
                <Grid item xs={12} className="mt-4">
                    <Button
                    className="w-100"
                    style={{backgroundColor:'#00FBEE'}}
                    color="primary"
                    variant="outlined"
                    type="submit"
                    size='small'
                    >
                        Apply
                    </Button>
                </Grid>
            </Grid>
        </form>
  )
}

ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(ContactForm)

export default ContactForm