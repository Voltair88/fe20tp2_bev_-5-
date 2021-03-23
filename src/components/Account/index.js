import React from "react";
import { PasswordForgetForm } from "../PasswordForget";
import PasswordChangeForm from "../PasswordChange";
import { AuthUserContext, withAuthorization } from "../Session";
import UserProfile from "../UserProfile";


const AccountPage = () => (
  <AuthUserContext.Consumer>
    {(authUser) => (
      <div>
        <h1>User: {authUser.username}</h1>
        {/* <PasswordForgetForm />
        <PasswordChangeForm /> */}
        <UserProfile user={authUser} />
        {/* {console.log(props.firebase.profileImage(uid).getDownloadURL())} */}
      </div>
    )}
  </AuthUserContext.Consumer>
);
const condition = (authUser) => !!authUser;
export default withAuthorization(condition)(AccountPage);
