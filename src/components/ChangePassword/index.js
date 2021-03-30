import React, { Component } from "react";
import { withFirebase } from "../Firebase";
import {
  Button,
  Wrapper,
  MainBlock,
  InputForReset,
  CancelButton,
} from "../StyledCom";

import * as ROUTES from "../../constants/routes";

const INITIAL_STATE = {
  passwordOne: "",
  passwordTwo: "",
  error: null,
};

class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = (event) => {
    const { passwordOne } = this.state;

    this.props.firebase
      .doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch((error) => {
        this.setState({ error });
      });
    event.preventDefault();
  };
  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { passwordOne, passwordTwo, error } = this.state;
    const isInvalid = passwordOne !== passwordTwo || passwordOne === "";
    return (
      <MainBlock>
        <Wrapper onSubmit={this.onSubmit}>
          <InputForReset
            type="password"
            name="CurrentPassword"
            placeholder="Current Password"
          />
          <p>Forgot your password? Click here to reset</p>
          <InputForReset
            name="passwordOne"
            value={passwordOne}
            onChange={this.onChange}
            type="password"
            placeholder="New Password"
          />
          <InputForReset
            name="passwordTwo"
            value={passwordTwo}
            onChange={this.onChange}
            type="password"
            placeholder="Confirm New Password"
          />
          <Button disabled={isInvalid} type="submit">
            Update Password
          </Button>
          <CancelButton to={ROUTES.ACCOUNT}>Cancel</CancelButton>
          {error && <p>{error.message}</p>}
        </Wrapper>
      </MainBlock>
    );
  }
}

export default withFirebase(ChangePassword);
