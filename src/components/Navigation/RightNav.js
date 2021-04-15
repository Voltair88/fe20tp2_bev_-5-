import React from 'react';
import styled from 'styled-components';
import { NavLink} from 'react-router-dom'
import { NewUl } from '../StyledCom';




const RightNav = ({ open }) => {
  return (
    <NewUl open={open}>
      <div>
        <NavLink exact to="/" className="Navlink" activeClassName="activ" >
          Landingpage
        </NavLink>
      </div>
      <div>
        <NavLink to="/home" className="Navlink" activeClassName="activ">
          Home
        </NavLink>
      </div>
      <div>
        <NavLink to="/account" className="Navlink" activeClassName="activ">
          Account
        </NavLink>
      </div>
      <div>
        <NavLink to="/admin" className="Navlink" activeClassName="activ">
          Admin
        </NavLink>
      </div>
    </NewUl>
  );
}

export default RightNav;