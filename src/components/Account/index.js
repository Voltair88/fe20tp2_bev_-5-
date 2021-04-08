import React from "react";
import { PasswordForgetForm } from "../PasswordForget";
import PasswordChangeForm from "../PasswordChange";
import { AuthUserContext, withAuthorization } from "../Session";
import UserProfile from "../UserProfile";

import * as ROUTES from "../../constants/routes";
import { ChangeButton } from "../StyledCom";
import Top20Scorers from "../Top20Scorers";

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {(authUser) => (
      <div>
        <UserProfile user={authUser} />
        <ChangeButton to={ROUTES.CHANGE_PASSWORD}>Change Password</ChangeButton>
        <ChangeButton to={ROUTES.CHANGE_EMAIL}>Change Email</ChangeButton>

        {/* <h1>Top 20 scoreres</h1>
        <Top20Scorers /> */}
      </div>
    )}
  </AuthUserContext.Consumer>
);
const condition = (authUser) => !!authUser;
export default withAuthorization(condition)(AccountPage);
