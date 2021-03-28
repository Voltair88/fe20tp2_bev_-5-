import React from "react";
import { PasswordForgetForm } from "../PasswordForget";
import PasswordChangeForm from "../PasswordChange";
import { AuthUserContext, withAuthorization } from "../Session";
import UserProfile from "../UserProfile";


import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {(authUser) => (
      <div>
        {/* <h1>{authUser.username}</h1> */}
        {/* <PasswordForgetForm />
        <PasswordChangeForm /> */}
        <Link to={ROUTES.CHANGE_PASSWORD}>Change Password</Link>
        {/* <br />
        <Link to={ROUTES.CHANGE_EMAIL}>Change Email</Link> */}
        <UserProfile user={authUser} />
        {/* {console.log(props.firebase.profileImage(uid).getDownloadURL())} */}
      </div>
    )}
  </AuthUserContext.Consumer>
);
const condition = (authUser) => !!authUser;
export default withAuthorization(condition)(AccountPage);
