import { Component } from 'react';
import { Field, Form } from 'react-final-form'
import { Button } from 'material-ui';
import { graphql } from 'react-apollo';
import { ResetPasswordMutation } from './api/mutations';
import TextField from './TextField';
import { redirect } from '../lib/helpers';
import Card, { CardContent, CardHeader } from 'material-ui/Card';

const validate = ({password, confirmPassword}) => {
    const errors = {};
    if (!password || !password.trim()) {
        errors.password = 'Password is required'
        return errors;
    }
    if (password !== confirmPassword)
        errors.confirmPassword = 'Passwords do not match'
    return errors;
}

class ResetPasswordForm extends Component {
    render() {
        const {onSubmit, initialValues = {}} = this.props;
        console.log(initialValues)
        return (
            <Form
                initialValues={initialValues}
                onSubmit={onSubmit}
                validate={validate}
                render={({handleSubmit, pristine, invalid}) => (
                    <Card style={{width: 350}}>
                        <CardHeader title="Reset password"/>
                        <CardContent>
                            <form onSubmit={handleSubmit}>
                                <Field name="password" type="password" component={TextField} placeholder="Password"/>
                                <Field name="confirmPassword" type="password" component={TextField}
                                       placeholder="Confirm Password"/>
                                <Button variant="raised" fullWidth type="submit" disabled={pristine || invalid}>
                                    Submit
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                )}
            />
        );
    }
}

export default graphql(ResetPasswordMutation, {
    props: ({mutate, ownProps: {ctx, code, userId}}) => ({
        onSubmit: async (formValues) => {
            await mutate({variables: {...formValues, code, userId}})
            alert('Your password has been saved')
            redirect('/login', ctx)
        },
    }),
})(ResetPasswordForm);
