import React from "react";
import { withFirebase } from "../Firebase";
import styled from "styled-components";



const SignOutButton = ({ firebase }) => (
  <outButton type="button" onClick={firebase.doSignOut}>
    Sign Out
  </outButton>
);

export default withFirebase(SignOutButton);
