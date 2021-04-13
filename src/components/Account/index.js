import React from "react";
import { PasswordForgetForm } from "../PasswordForget";
import PasswordChangeForm from "../PasswordChange";
import { ChangeTheme } from "../ChangeTheme";
import { AuthUserContext, withAuthorization } from "../Session";
import UserProfile from "../UserProfile";

import * as ROUTES from "../../constants/routes";
import { ChangeButton } from "../StyledCom";
<<<<<<< HEAD
/* import Top20Scorers from "../Top20Scorers";
 */
=======
import Top20Scorers from "../Top20Scorers";

>>>>>>> main
const AccountPage = () => (
  <AuthUserContext.Consumer>
    {(authUser) => (
      <div>
        <UserProfile user={authUser} />
        <ChangeButton to={ROUTES.CHANGE_PASSWORD}>Change Password</ChangeButton>
        <ChangeButton to={ROUTES.CHANGE_EMAIL}>Change Email</ChangeButton>
<<<<<<< HEAD
        <ChangeButton to={ROUTES.CHANGE_THEME}>Change theme </ChangeButton>

        {/* {console.log(props.firebase.profileImage(uid).getDownloadURL())} */}
=======

        {/* <h1>Top 20 scoreres</h1>
        <Top20Scorers /> */}
>>>>>>> main
      </div>
    )}
  </AuthUserContext.Consumer>
);
const condition = (authUser) => !!authUser;
export default withAuthorization(condition)(AccountPage);
