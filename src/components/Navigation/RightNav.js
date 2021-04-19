import React, { useContext } from "react";

import { NavLink } from "react-router-dom";
import { NewUl } from "../../theme/StyledCom";
import * as ROUTES from "../../constants/routes";
import * as ROLES from "../../constants/roles";
import { AuthUserContext } from "../Session";
import SignOutButton from "../SignOut";
import { OpenContext } from "./Burger.js";

const RightNav = ({ open }) => {
  const authUser = useContext(AuthUserContext);
  return authUser ? <RightNavAuth authUser={authUser} /> : <RightNavNoAuth />;
};

const RightNavAuth = ({ authUser }) => {
  const open = useContext(OpenContext);
  return (
    <NewUl open={open}>
      <div>
        <NavLink exact to="/" className="Navlink" activeClassName="activ">
          Landingpage
        </NavLink>
      </div>
      <div>
        <NavLink to={ROUTES.HOME} className="Navlink" activeClassName="activ">
          Home
        </NavLink>
      </div>
      {!!authUser.fav_team_id && (
        <div>
          <NavLink
            to={`${ROUTES.TEAM}/${authUser.fav_team_id}`}
            className="Navlink"
            activeClassName="activ"
          >
            Favorite
          </NavLink>
        </div>
      )}
      <div>
        <NavLink
          to={ROUTES.ACCOUNT}
          className="Navlink"
          activeClassName="activ"
        >
          Account
        </NavLink>
      </div>

      {!!authUser.roles[ROLES.ADMIN] && (
        <div>
          <NavLink
            to={ROUTES.ADMIN}
            className="Navlink"
            activeClassName="activ"
          >
            Admin
          </NavLink>
        </div>
      )}
      <div>
        <SignOutButton />
      </div>
    </NewUl>
  );
};

const RightNavNoAuth = () => {
  const open = useContext(OpenContext);
  return (
    <NewUl open={open}>
      <div>
        <NavLink exact to="/" className="Navlink" activeClassName="activ">
          Landingpage
        </NavLink>
      </div>
      <div>
        <NavLink
          to={ROUTES.SIGN_IN}
          className="Navlink"
          activeClassName="activ"
        >
          Sign In
        </NavLink>
      </div>
    </NewUl>
  );
};

export default RightNav;
