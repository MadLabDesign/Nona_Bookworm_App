import SigninLayout from '../components/Layout/SigninLayout';
import { Component } from 'react';

import { withDefaultsUnauthenticated } from '../lib/withDefaults';
import LoginForm from "../components/AccessContainers/Login";


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
