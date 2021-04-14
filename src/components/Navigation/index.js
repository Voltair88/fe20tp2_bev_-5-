import { AuthUserContext, withAuthentication } from "../Session";
import * as ROUTES from "../../constants/routes";
import * as ROLES from "../../constants/roles";
import SignOutButton from "../SignOut";
import { Burger } from "./Burger.js";
import React, { useEffect, useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Ul, NavLink, HamMenu } from "../StyledCom";
import ProfileImage from "../../img/prf_img.png";

const Navigation = (props) => {

  const user = React.useContext(AuthUserContext);

  const [url, setUrl] = useState(ProfileImage);

  /*  useEffect(() => {
     console.log("user" + user)
 
     if (!!user.uid) {
       props.firebase.profileImage(user.uid)
         .getDownloadURL()
         .then(url => {
           setUrl(url);
         });
     }
   }, []); */





  return (
    <Navbar>
      <AuthUserContext.Consumer>
        {(authUser) =>
          authUser ? (
            <NavigationAuth authUser={authUser} url={url} />
          ) : (
            <NavigationNonAuth />
          )
        }
      </AuthUserContext.Consumer>
      <Burger />
    </Navbar>
  );
};

const NavigationAuth = ({ authUser, url }) => {
  return (
    <Ul>
      <li>
        <NavLink to={ROUTES.LANDING}>Landing</NavLink>
      </li>
      <li>
        <NavLink to={ROUTES.HOME}>Home</NavLink>
      </li>
      {!!authUser.roles[ROLES.ADMIN] && (
        <li>
          <NavLink to={ROUTES.ADMIN}>Admin</NavLink>
        </li>
      )}
      <li>
        <SignOutButton />
      </li>
      <li>
        <NavLink to={ROUTES.ACCOUNT}> {/*  <img src={url} alt="" /> */}      Account</NavLink>
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
