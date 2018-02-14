import { Field, Form } from 'react-final-form'
import { Button } from 'material-ui';
import Link from './Link';
import TextField from './TextField';
import { graphql } from 'react-apollo';
import { RegisterMutation } from './api/mutations';
import { redirect } from '../lib/helpers';
import { setToken } from '../lib/auth';
import Card, { CardContent, CardHeader } from 'material-ui/Card';
import CardActions from 'material-ui/Card/CardActions';

const RegistrationForm = ({register}) => {
    const validate = ({firstName, lastName, email, password}) => {
        const errors = {};
        if (!firstName || !firstName.trim())
            errors.firstName = 'First name is required'
        if (!lastName || !lastName.trim())
            errors.lastName = 'Last name is required'
        if (!email || !email.trim())
            errors.email = 'Email is required'
        if (!password || !password.trim())
            errors.password = 'Password is required'
        return errors;
    }
    return (
        <Form
            onSubmit={register}
            validate={validate}
            render={({handleSubmit, pristine, invalid}) => (
                <form onSubmit={handleSubmit}>
                    <Card style={{width: 350}}>
                        <CardHeader title="Register"/>
                        <CardContent>

                            <Field name="firstName" component={TextField} placeholder="First Name"/>
                            <Field name="lastName" component={TextField} placeholder="Last Name"/>
                            <Field name="email" type="email" component={TextField} placeholder="Email"/>
                            <Field name="password" type="password" component={TextField} placeholder="Password"/>
                            <Button variant="raised" fullWidth type="submit" disabled={pristine || invalid}>
                                Register
                            </Button>
                        </CardContent>
                        <CardActions>
                            <Link button size="small" href="/login">Login</Link>
                        </CardActions>
                    </Card>
                </form>
            )}
        />
    )
}

export default graphql(RegisterMutation, {
    props: ({mutate, ownProps}) => ({
        register: async (variables) => {
            const {data} = await mutate({variables})
            setToken(data.register.token);
            redirect('/', ownProps.ctx)
        },
    }),
})(RegistrationForm);
