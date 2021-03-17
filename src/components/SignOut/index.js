import React from "react";
import { withFirebase } from "../Firebase";
import styled from "styled-components";
import { OutButton } from './StyledCom';



const SignOutButton = ({ firebase }) => (
  <OutButton type="button" onClick={firebase.doSignOut}>
    Sign Out
  </OutButton>
);

export default withFirebase(SignOutButton);
