import { Link } from "react-router-dom";
import { AuthUserContext } from "../Session";
import * as ROUTES from "../../constants/routes";
import * as ROLES from "../../constants/roles";
import SignOutButton from "../SignOut";

import styled from "styled-components";

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
  background-color: #50c818;
  height: 100%;
  font-size: 1.2rem;
  & > li {
    padding: 1rem;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: white;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
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
    <li>
      <NavLink to={ROUTES.LANDING}>Landing</NavLink>
    </li>
    <li>
      <NavLink to={ROUTES.SIGN_IN}>Sign In</NavLink>
    </li>
  </Ul>
);

export default Navigation;
