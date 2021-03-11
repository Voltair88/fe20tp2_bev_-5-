import { Link } from "react-router-dom";
import { AuthUserContext } from "../Session";
import * as ROUTES from "../../constants/routes";
import * as ROLES from "../../constants/roles";
import SignOutButton from "../SignOut";

import styled from "styled-components";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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
  background: rgb(32, 224, 63);
  background: linear-gradient(
    0deg,
    rgba(32, 224, 63, 1) 0%,
    rgba(31, 119, 22, 1) 100%
  );
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

const NavigationAuth = ({ authUser }) => (
  <Ul>
    <HamMenu icon={faBars} />
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
const NavigationNonAuth = () => (
  <Ul>
    <HamMenu icon={faBars} />
    <li>
      <NavLink to={ROUTES.LANDING}>Landing</NavLink>
    </li>
    <li>
      <NavLink to={ROUTES.SIGN_IN}>Sign In</NavLink>
    </li>
  </Ul>
);

export default Navigation;
