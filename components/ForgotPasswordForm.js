import { Component } from 'react';
import { Field, Form } from 'react-final-form'
import { Button } from 'material-ui';
import Card, { CardContent, CardHeader } from 'material-ui/Card';
import CardActions from 'material-ui/Card/CardActions';
import Link from './Link';
import { graphql } from 'react-apollo';
import { ForgotPasswordMutation } from './api/mutations';
import TextField from './TextField';

const validate = ({email}) => {
    const errors = {};
    if (!email || !email.trim())
        errors.email = 'Email is required'
    return errors;
}

class ForgotPasswordForm extends Component {
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

                    <CardHeader title="Forgot password" />

                    <CardContent>

                        <form onSubmit={handleSubmit}>
                            <Field name="email" type="email" component={TextField} placeholder="Email"/>
                            <Button variant="raised" fullWidth type="submit" disabled={pristine || invalid}>
                                Submit
                            </Button>
                        </form>
                    </CardContent>
                    <CardActions>
                        <Link button size="small" href="/register">Register</Link>
                    </CardActions>
                </Card>

                )}
            />
        );
    }
}

export default graphql(ForgotPasswordMutation, {
    props: ({mutate}) => ({
        onSubmit: async variables => {
            await mutate({variables})
            alert('Please check your email')
            // redirect('/')
        },
    }),
})(ForgotPasswordForm);
