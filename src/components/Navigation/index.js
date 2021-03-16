import { AuthUserContext } from "../Session";
import * as ROUTES from "../../constants/routes";
import * as ROLES from "../../constants/roles";
import SignOutButton from "../SignOut";

import React, { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Ul, NavLink, HamMenu } from "../StyledCom";

const Navigation = () => {
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
    </Navbar>
  );
};

const MenuToggle = () => {
  const [showMenu, setShowMenu] = useState(false);
  if (showMenu) {
  }

  return <HamMenu icon={faBars} onClick={() => setShowMenu(!showMenu)} />;
};

const NavigationAuth = ({ authUser }) => {
  return (
    <Ul>
      <MenuToggle />
      <li>
        <NavLink to={ROUTES.LANDING}>Landing</NavLink>
      </li>
      <li>
        <NavLink to={ROUTES.HOME}>Home</NavLink>
      </li>
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
    <MenuToggle />
    <li>
      <NavLink to={ROUTES.LANDING}>Landing</NavLink>
    </li>
    <li>
      <NavLink to={ROUTES.SIGN_IN}>Sign In</NavLink>
    </li>
  </Ul>
);

export default Navigation;
