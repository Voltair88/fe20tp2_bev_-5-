import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import ProfileImage from '../../img/prf_img.png'

import { Input, Content, MyButton } from '../StyledCom';

const SignUpPage = () => (
  <Content>
    <h1>SignUp</h1>
    <SignUpForm />
    </Content>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  isAdmin: false,
  error: null
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, passwordOne, isAdmin } = this.state;

    
    const roles = {};
let uid;

    if (isAdmin) {
    roles[ROLES.ADMIN] = ROLES.ADMIN;
    }

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        this.props.firebase
          .user(authUser.user.uid)
          .set({
            username,
            email,
            roles,
          })
          this.props.firebase.profileImage(authUser.user.uid)
          .child('image.jpg')
          .put(ProfileImage)
          .then(() => {
            this.setState({ ...INITIAL_STATE });
            this.props.history.push(ROUTES.HOME);
          })
          .catch(error => {
            this.setState({ error });
          });

          uid = authUser.user.uid;

      })
      .catch(error => {
        this.setState({ error });
      });



      this.props.firebase.profileImage(uid).put(ProfileImage);











    event.preventDefault();


    
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onChangeCheckbox = event => {
    this.setState({ [event.target.name]: event.target.checked });
    };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      isAdmin,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <form onSubmit={this.onSubmit}>
        <Content>
        <Input
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
        />
        
        <Input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <Input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <Input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />
        </Content>
        <label>
        Admin:
        <input
          name="isAdmin"
          type="checkbox"
          checked={isAdmin}
          onChange={this.onChangeCheckbox}
          />
        </label>
        <MyButton disabled={isInvalid} type="submit">
          Sign Up
        </MyButton>
        

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export { SignUpForm, SignUpLink };