import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

//Styling for Navigation
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

  img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
//Styling for Landingpage

const Main = styled.main`
  box-sizing: border-box;
  display: flex;
  font-family: "Poppins", sans-serif;
  width: 100%;
  height: 92vh;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  height: auto;
`;

const H1 = styled.h1`
  font-size: 3rem;
  margin-top: -8vw;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 2.1rem;
  }
`;

const P = styled.p`
  font-size: 1.4rem;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0 1rem;
  }
`;

const Background = styled.main`
  background-color: #e8e8e8;
  //background-image: url("https://images.unsplash.com/photo-1556056504-5c7696c4c28d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2083&q=80");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Input = styled.input`
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

  &:focus {
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

const MyButton = styled.button`
  appearance: none;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;

  padding: 20px 40px;
  border-radius: 4px;
  color: #50c818;

  font-size: 15px;
`;

const Blur = styled.main`
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  height: auto;
  width: 100%;
`;
const HomeMain = styled.main`
  box-sizing: border-box;
  display: flex;
  font-family: "Poppins", sans-serif;
  width: 100%;
  height: auto;
`;

const ChartContainer = styled.div`
  height: 500px;
  width: 600px;
`;

const OutButton = styled.button`
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

const MainBlock = styled.main`
  height: 92vh;
`;

const Wrapper = styled.form`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > hr {
    border: none;
  }

  & > p {
    width: 30%;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    margin: -0.5rem 0 0.8rem 0;
    transition: 0.3s;
    @media screen and (min-width: 769px) and (max-width: 1024px) {
      width: 50%;
      font-size: 1.3rem;
    }

    @media screen and (max-width: 768px) {
      width: 50%;
      font-size: 0.9rem;
      margin: -0.2rem 0 0.3rem 0;
    }
    @media screen and (max-width: 414px) {
      width: 70%;
      font-size: 0.9rem;
      margin: -0.2rem 0 0.3rem 0;
    }
  }
`;

const InputForReset = styled.input`
  justify-content: center;
  display: flex;
  align-items: center;
  align-content: center;
  width: 30%;
  height: 5vh;
  border: 2px solid #aaa;
  border-radius: 4px;
  margin: 0.6em auto;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
  font-size: 1rem;

  &:focus {
    border-color: #50c818;
    box-shadow: 0 0 8px 0 #50c818;
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    width: 50%;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    width: 50%;
  }
  @media screen and (max-width: 414px) {
    width: 70%;
    height: 7vh;
  }
`;

const Button = styled.button`
  width: 30%;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  color: Black;
  padding: 0.3rem 0.6rem;
  font-size: 1rem;
  border: 2px solid black;
  background: none;
  border-radius: 6px;
  cursor: pointer;
  margin: 1rem;
  transition: 0.3s;

  &:hover {
    border-color: black;
    color: white;
    background: black;
    transition: 0.3s ease-in-out;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    width: 50%;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    width: 50%;
  }

  @media screen and (max-width: 414px) {
    width: 70%;
  }
`;

const CancelButton = styled(Link)`
  width: 30%;
  text-decoration: none;
  text-align: center;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  color: red;
  padding: 0.3rem 0rem;
  font-size: 1rem;
  border: 2px solid black;
  border-radius: 6px;
  cursor: pointer;
  margin: 1rem;
  transition: 0.3s;

  &:hover {
    border-color: black;
    color: red;
    background: black;
    transition: 0.3s ease-in-out;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    width: 50%;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    width: 50%;
  }

  @media screen and (max-width: 414px) {
    width: 70%;
  }
`;

const ChangeButton = styled(Link)`
  font-family: "Poppins", sans-serif;
  display: flex;
  width: 10%;
  flex-direction: column;
  text-align: center;
  margin: auto;
  margin-top: 1rem;
  padding: 0.3rem;
  text-decoration: none;
  border: 1.5px black solid;
  color: black;
  border-radius: 6px;

  &:hover {
    border-color: black;
    color: white;
    background: black;
    transition: 0.3s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    font-size: 11px;
  }
`;

// user profile page
const UserComp = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 50%;
  .username-input {
    /* background-color: red; */
    font-size: x-large;
    width: 50%;
    align-self: center;
    text-align: center;
    border: none;
    background-image: url(../../img/pencil.png);
    background-position: 7px 7px;
    background-repeat: no-repeat;
  }
  span {
    position: absolute;
    top: 2px;
    right: 2px;
  }
`;

const ImageUpload = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > input {
    visibility: hidden;
    width: 0;
    height: 0;
  }
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const Container = styled.div`
  display: flex;
  /* flex-direction: column; */
  /* align-items: center; */
  justify-content: center;

  /* & > div{
        background-color: bisque;
        width: 400px;
    } */
`;
//end user profile page.

export {
  OutButton,
  ChartContainer,
  HomeMain,
  Blur,
  MyButton,
  Input,
  Background,
  P,
  H1,
  Content,
  Main,
  NavLink,
  Ul,
  Navbar,
  Button,
  Wrapper,
  MainBlock,
  InputForReset,
  ChangeButton,
  CancelButton,
  Container,
  ImageUpload,
  UserComp,
};
