import SigninLayout from '../components/Layout/SigninLayout';
import { Component } from 'react';
import LoginForm from '../components/LoginForm';
import { withDefaultsUnauthenticated } from '../lib/withDefaults';


class Login extends Component {
    render() {
        return (
            <SigninLayout>
                <LoginForm/>
            </SigninLayout>
        );
    }
}

export default withDefaultsUnauthenticated(Login)
