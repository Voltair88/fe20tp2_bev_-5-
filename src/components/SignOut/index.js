import React from "react";
import { withFirebase } from "../Firebase";
import { OutButton } from "../../theme/StyledCom";

const SignOutButton = ({ firebase }) => (
  <OutButton type="button" onClick={firebase.doSignOut}>
    Sign Out
  </OutButton>
);

export default withFirebase(SignOutButton);
