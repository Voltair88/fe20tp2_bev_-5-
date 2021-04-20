import React from "react";
import { AuthUserContext, withAuthorization } from "../Session";
import UserProfile from "../UserProfile";
import * as ROUTES from "../../constants/routes";
import { ChangeButton } from "../../theme/StyledCom";

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {(authUser) => (
      <div>
        <UserProfile user={authUser} />
        <ChangeButton to={ROUTES.CHANGE_PASSWORD}>Change Password</ChangeButton>
        <ChangeButton to={ROUTES.CHANGE_THEME}>Change theme </ChangeButton>
      </div>
    )}
  </AuthUserContext.Consumer>
);
const condition = (authUser) => !!authUser;
export default withAuthorization(condition)(AccountPage);
