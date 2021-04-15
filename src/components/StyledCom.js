import styled from "styled-components";
import { Link } from "react-router-dom";

//Styling for Navigation
const Navbar = styled.div`
  background-color: white;
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
  border-bottom: 2px solid;
  border-color: white;
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
  font-weight: 500;

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

const HomeMain = styled.main`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: auto;
`;

const ChartContainer = styled.div`
  height: 500px;
  width: 600px;
`;

const OutButton = styled.button`
  font-weight: 500;
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
  display: flex;
  width: 10%;
  flex-direction: column;
  text-align: center;
  margin: auto;
  margin-top: 1rem;
  padding: 0.3rem;
  text-decoration: none;
  border: 1.5px black solid;
/*   color: black;
 */  border-radius: 6px;

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

//burger

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  left: 20px;
  z-index: 20;
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#fff'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const NewUl = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  .Navlink {
    color:rgba(0,0,0,0);
    padding: 1px 20px;
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
        color: white;
    }
  }`;




export {
  OutButton,
  ChartContainer,
  HomeMain,
  MyButton,
  Input,
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
  StyledBurger,
  NewUl
};
