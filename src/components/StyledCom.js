import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

//Styling for Navigation
export const Navbar = styled.div`
  width: 100%;
  height: 8vh;
`;

export const Ul = styled.ul`
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

export const NavLink = styled(Link)`
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
//Styling for Landingpage

export const Main = styled.main`
  box-sizing: border-box;
  display: flex;
  font-family: "Poppins", sans-serif;
  width: 100%;
  height: 92vh;
  background-image: url("https://images.unsplash.com/photo-1556056504-5c7696c4c28d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2083&q=80");
  background-size: fixed;
  background-position: center;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  height: 92vh;
`;

export const H1 = styled.h1`
  font-size: 3rem;
  margin-top: -8vw;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 2.1rem;
  }
`;

export const P = styled.p`
  font-size: 1.4rem;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0 1rem;
  }
`;


export const Background = styled.main`
  background-color: #e8e8e8;
  background-image: url("https://images.unsplash.com/photo-1556056504-5c7696c4c28d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2083&q=80");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;


export const Input = styled.input`
    justify-content: center;
    justify-content: row;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 20%;
    border: 2px solid #aaa;
    border-radius: 4px;
    margin: 0.6em auto;
    outline: none;
    padding: 8px;
    box-sizing: border-box;
    transition: 0.3s;
    

    &:focus{
      border-color: #50c818;
      box-shadow: 0 0 8px 0 #50c818;
    }
    @media screen and (max-width: 1024px) {
        width: 40%;
    }


    @media screen and (max-width: 768px) {
        width: 50%;
    }
`;


export const MyButton = styled.button`
    appearance: none;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;

    padding: 20px 40px;
    border-radius: 4px;
    color: #50c818;

`;



export const Blur = styled.main`
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  height: auto;
  width: 100%;
`;

export const HomeMain = styled.main`
  box-sizing: border-box;
  display: flex;
  font-family: "Poppins", sans-serif;
  width: 100%;
  height: 92vh;
`;


export const ChartContainer = styled.div`
  height: 500px;
  width: 600px;
  position: absolute;
  left: 10px;
  top: 40px;
`
