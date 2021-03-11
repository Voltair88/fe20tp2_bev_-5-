import React from "react";
import { withFirebase } from "../Firebase";
import styled from "styled-components";

const Button = styled.button`
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  color: white;
  padding: 0.3rem 0.6rem;
  font-size: 1.1rem;
  border: 2px solid white;
  background: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    border-color: black;
    color: black;
    transition: 0.3s ease-in-out;
  }
`;

const SignOutButton = ({ firebase }) => (
  <Button type="button" onClick={firebase.doSignOut}>
    Sign Out
  </Button>
);

export default withFirebase(SignOutButton);
