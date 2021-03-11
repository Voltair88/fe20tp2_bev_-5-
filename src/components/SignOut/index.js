import React from "react";
import { withFirebase } from "../Firebase";
import styled from "styled-components";

const SignOutButton = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignOut}>
    Sign Out
  </button>
);

export default withFirebase(SignOutButton);
