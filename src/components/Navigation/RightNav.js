import React from 'react';
import styled from 'styled-components';
import { NavLink} from 'react-router-dom'


const Ul = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  .Navlink {
    padding: 1px 20px;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    margin-top: 0px;
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    z-index: 1 ;
    top: 0;
    right: -10;
    width: 150px;
    padding-bottom: 20px;
    padding-top: 3.5rem;
    padding-inline-start: 10px;
    border-radius: 0px 0px 5px ;
    transition: transform 0.3s ease-in-out;
    font-size: 1.2em;
    line-height: 1.7em;
    .Navlink {
        text-decoration: none; 
        border-radius: 8px ;

    }
  }`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
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
    </Ul>
  );
}

export default RightNav