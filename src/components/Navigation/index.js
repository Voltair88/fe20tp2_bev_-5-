import { AuthUserContext, withAuthentication } from "../Session";
import * as ROUTES from "../../constants/routes";
import * as ROLES from "../../constants/roles";
import SignOutButton from "../SignOut";
import { Burger } from "./Burger.js";
import React from "react";
import { Navbar, Ul, NavLink } from "../../theme/StyledCom";

const Navigation = (props) => {
  return (
    <Navbar>
      <AuthUserContext.Consumer>
        {(authUser) =>
          authUser ? (
            <NavigationAuth authUser={authUser} />
          ) : (
            <NavigationNonAuth />
          )
        }
      </AuthUserContext.Consumer>
      <Burger />
    </Navbar>
  );
};

const NavigationAuth = ({ authUser }) => {
  return (
    <Ul>
      <li>
        <NavLink to={ROUTES.LANDING}>Landing</NavLink>
      </li>
      <li>
        <NavLink to={ROUTES.HOME}>Home</NavLink>
      </li>
      {!!authUser.fav_team_id && (
        <li>
          <NavLink to={`${ROUTES.TEAM}/${authUser.fav_team_id}`}>
            Favorite
          </NavLink>
        </li>
      )}
      <li>
        <NavLink to={ROUTES.ACCOUNT}>Account</NavLink>
      </li>
      {!!authUser.roles[ROLES.ADMIN] && (
        <li>
          <NavLink to={ROUTES.ADMIN}>Admin</NavLink>
        </li>
      )}
      <li>
        <SignOutButton />
      </li>
    </Ul>
  );
};
const NavigationNonAuth = () => (
  <Ul>
    <li>
      <NavLink to={ROUTES.LANDING}>Landing</NavLink>
    </li>
    <li>
      <NavLink to={ROUTES.SIGN_IN}>Sign In</NavLink>
    </li>
  </Ul>
);

export default withAuthentication(Navigation);
