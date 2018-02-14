import SigninLayout from '../Layout/SigninLayout';
import { Component } from 'react';
import { withDefaultsUnauthenticated } from '../lib/withDefaults';
import React from "react";
import LoginForm from "./Login";


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
