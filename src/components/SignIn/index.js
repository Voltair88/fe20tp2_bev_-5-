import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import styled from "styled-components";

import { Content, Input, MyButton } from '../StyledCom';
    


const SignInPage = () => (
    <Content>
        <h1>SignIn</h1>
        <SignInForm />
        <SignUpLink />
        <PasswordForgetLink />
    </Content>
);

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE}
    }

    onSubmit = event => {
        const { email, password } = this.state;

        this.props.firebase
        .doSignInWithEmailAndPassword(email, password)
        .then(() => {
            this.setState({ ...INITIAL_STATE });
            this.props.history.push(ROUTES.HOME);
            })
        .catch(error => {
            this.setState({ error });
            });
        event.preventDefault();
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        };

    render() { 

        const { email, password, error } = this.state;

        const isInvalid = password === '' || email === '';
        return ( 
            <form onSubmit={this.onSubmit}>
                
                <Input
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <Input
                    name="password"
                    value={password}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                />
                <MyButton disabled={isInvalid} type="submit">
                Sign In
                </MyButton>
                {error && <p>{error.message}</p>}
            </form>
         );
    }
}
 
const SignInForm = compose(
    withRouter,
    withFirebase,
    )(SignInFormBase);

export default SignInPage;

export { SignInForm };

