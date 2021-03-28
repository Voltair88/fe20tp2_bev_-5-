import React from "react";
import { PasswordForgetForm } from "../PasswordForget";
import PasswordChangeForm from "../PasswordChange";
import { AuthUserContext, withAuthorization } from "../Session";
import UserProfile from "../UserProfile";



import * as ROUTES from "../../constants/routes";
import { ChangeButton } from "../StyledCom";

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {(authUser) => (
      <div>
        <h1>Account: {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
        <UserProfile user={authUser} />
        <ChangeButton to={ROUTES.CHANGE_PASSWORD}>Change Password</ChangeButton>
        <ChangeButton to={ROUTES.CHANGE_EMAIL}>Change Email</ChangeButton>
        {/* {console.log(props.firebase.profileImage(uid).getDownloadURL())} */}
      </div>
    )}
  </AuthUserContext.Consumer>
);
const condition = (authUser) => !!authUser;
export default withAuthorization(condition)(AccountPage);
