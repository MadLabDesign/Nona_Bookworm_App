import React from 'react'
import {Button, Form, Grid, Header, Image, Message, Segment} from 'semantic-ui-react'

const LoginForm = () => (
    <div className='login-form'>
        {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}


        <Header as='h2' color='teal' textAlign='center'>
            <Image src='/logo.png'/><br/>
            {' '}Log-in to your account
        </Header>
        <Form size='large'>
            <Segment piled>
                <Form.Input
                    fluid
                    icon='user'
                    iconPosition='left'
                    placeholder='E-mail address'
                />
                <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                />

                <Button color='teal' fluid size='large'>Login</Button>
            </Segment>
        </Form>
        <Message>
            New to us? <a href='#'>Sign Up</a>
        </Message>
    </div>

)

export default LoginForm