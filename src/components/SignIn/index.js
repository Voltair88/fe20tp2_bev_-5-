import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import styled from "styled-components";

const Input = styled.input`
    justify-content: center;
    justify-content: row;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 20%;
    border: 2px solid #aaa;
    border-radius: 4px;
    margin: 0.6em auto;
    outline: none;
    padding: 8px;
    box-sizing: border-box;
    transition: 0.3s;
    

    &:focus{
      border-color: #50c818;
      box-shadow: 0 0 8px; 0 #50c818;
    }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  height: 92vh;
`;


const MyButton = styled.button`
    appearance: none;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;

    padding: 20px 40px;
    border-radius: 4px;
    color: #50c818;

`;
    


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

