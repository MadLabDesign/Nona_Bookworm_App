import { Component } from 'react';
import { Field, Form } from 'react-final-form'
import { Button } from 'material-ui';
import Card, { CardContent, CardHeader } from 'material-ui/Card';
import Link from './Link';
import { compose, graphql } from 'react-apollo';
import { LoginMutation } from './api/mutations';
import TextField from './TextField';
import { setToken, withLoggedInUser } from '../lib/auth';
import { getFullName, redirect } from '../lib/helpers';
import CardActions from 'material-ui/Card/CardActions';

const validate = ({email, password}) => {
    const errors = {};
    if (!email || !email.trim())
        errors.email = 'Email is required'
    if (!password || !password.trim())
        errors.password = 'Password is required'
    return errors;
}


class LoginForm extends Component {
    render() {
        const {login, user} = this.props;
        return (
            <Form
                initialValues={user}
                onSubmit={login}
                validate={validate}
                render={({handleSubmit, pristine, invalid}) => (
                    <Card style={{width: 350}}>
                        {user ? [<CardHeader

                                title={getFullName(user)}
                                subheader="My Account"/>,
                                <span> Not {user.firstName}? <Link route="/">Click here</Link></span>]
                            :
                            <CardHeader title="Login"/>}
                        <CardContent>
                            <form onSubmit={handleSubmit}>
                                <Field name="email" type="email" component={TextField} label="Email Address"/>
                                <Field name="password" type="password" component={TextField} label="Password"/>
                                <Button type="submit" size="large" color="primary" variant="raised" fullWidth
                                        disabled={pristine || invalid}>NEXT</Button>
                            </form>
                        </CardContent>

                        <CardActions>
                            <Link button size="small" href="/forgot-password">Forgot Password?</Link>
                            <Link button size="small" href="/register">Register</Link>
                        </CardActions>
                    </Card>
                )}
            />
        );
    }
}

export default compose(
    withLoggedInUser,
    graphql(LoginMutation, {
        props: ({mutate, ownProps}) => ({
            login: async variables => {
                const {data} = await mutate({variables})
                if (!data.login.token) {
                    return alert('Incorrect credentials provided')
                }
                setToken(data.login.token)
                redirect('/', ownProps.ctx);
            },
        }),
    }),
)(LoginForm);
