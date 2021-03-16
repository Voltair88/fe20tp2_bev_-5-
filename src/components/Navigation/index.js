import { AuthUserContext } from "../Session";
import * as ROUTES from "../../constants/routes";
import * as ROLES from "../../constants/roles";
import SignOutButton from "../SignOut";

import React, { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
<<<<<<< HEAD
import { Navbar, Ul, NavLink, HamMenu } from "../StyledCom";
=======

const Navbar = styled.div`
  width: 100%;
  height: 8vh;
`;

const Ul = styled.ul`
  margin: 0;
  padding-right: 2.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  background: rgb(33,224,63);
background: -moz-linear-gradient(0deg, rgba(32,224,63,1) 0%, rgba(31,119,22,1) 100%);
background: -webkit-linear-gradient(0deg, rgba(32,224,63,1) 0%, rgba(31,119,22,1) 100%);
background: linear-gradient(0deg, rgba(32,224,63,1) 0%, rgba(31,119,22,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#20e03f",endColorstr="#1f7716",GradientType=1);
  height: 100%;
  font-size: 1.2rem;
  & > li {
    padding: 1rem;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: white;
  font-weight: 500;
  font-family: "Poppins", sans-serif;

  &:hover {
    color: black;
    transition: 0.3s ease-in-out;
  }
`;

const HamMenu = styled(FontAwesomeIcon)`
  color: white;
  font-size: 1.6rem;
  margin-right: auto;
  cursor: pointer;
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    margin-left: -1rem;
  }
`;
>>>>>>> 68099ef20f2b4fb6c9f844daeb71db641ed16a8d

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
