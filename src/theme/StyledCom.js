import styled from "styled-components";
import { Link } from "react-router-dom";

//Styling for Navigation
const Navbar = styled.div`
  background: ${({ theme }) => theme.colors.header};
  width: 100%;
  height: 8vh;
`;

const Ul = styled.ul`
  margin: 0;
  padding-right: 2.5rem;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  border-bottom: 2px solid;
  border-color: ${({ theme }) => theme.colors.text};
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
    color: ${({ theme }) => theme.colors.hover};
    transition: 0.3s ease-in-out;
  }

  img {
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
  color: ${({ theme }) => theme.colors.text};
  padding: 0.3rem 0.6rem;
  font-size: 1.1rem;
  border: 2px solid;
  border-color: ${({ theme }) => theme.colors.text};
  background: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.text};
    border-color: black;
    color: ${({ theme }) => theme.colors.body};
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

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
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
  border-radius: 6px;

  &:hover {
    border-color: black;
    color: white;
    background: black;
    transition: 0.3s ease-in-out;
  }

  

  @media screen and (max-width: 768px) {
    font-size: 11px;
    width: 40%;
  }
`;

const HomeButton = styled(Link)`
  display: flex;
  width: 40%;
  flex-direction: column;
  font-size: large;
  text-align: center;
  margin: auto;
  margin-top: 1rem;
  padding: 1rem;
  text-decoration: none;
  border: 1.5px black solid;

  &:hover {
    border-color: black;
    color: white;
    background: black;
    transition: 0.3s ease-in-out;
  }

  

  @media screen and (max-width: 768px) {
    font-size: 11px;
    width: 40%;
  }
`;

const Arrow = styled.span `
  padding: 12px 5px 2px 5px;
  border-radius: 50%;
  border: solid black;
`

// user profile page
const UserComp = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  .username-input {
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
  justify-content: center;
`;

//end user profile page.

//burger

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 1.9%;
  left: 5%;
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
    background-color: ${({ open }) => (open ? "#ccc" : "#fff")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const NewUl = styled.ul`
  display: none;
  flex-flow: row nowrap;
  .Navlink {
    color: rgba(0, 0, 0, 0);
    padding: 1px 20px;
    text-decoration: none;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
    margin-top: 0px;
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    z-index: 1;
    top: 0;
    right: -10;
    width: 150px;
    padding-bottom: 20px;
    padding-top: 3.5rem;
    padding-inline-start: 10px;
    border-radius: 0px 0px 5px;
    transition: transform 0.3s ease-in-out;
    font-size: 1.2em;
    line-height: 1.7em;
    .Navlink {
      text-decoration: none;
      border-radius: 8px;
      color: white;
    }
  }
`;

const TeamItemContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 1rem 0rem;
  font-size: 1.2rem;

  @media only screen and (max-width: 540px) {
    height: 12vh;
    font-size: 1rem;
    word-wrap: break-word;

    span:nth-child(2) {
      flex-grow: 2;
      min-width: 40%;
    }
    span {
      min-width: 0%;
    }
  }
`;

const StyledTeamList = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-height: 100%;
  max-width: 100%;
  span {
    text-align: center;
    vertical-align: middle;
    box-sizing: border-box;
    flex-grow: 1;
    width: 33.33%;
    padding: 0.05em 0.5em;
    overflow: hidden; // Or flex might break
    list-style: none;
    img {
      width: 50%;
      height: auto;
    }

    @media only screen and (max-width: 540px) {
      padding: 0;
    }
  }
`;

//landing background

const BgImage = styled.div`
  padding-top: 10em;
`;

const BgContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-background-size: cover;
  background-size: cover;
  z-index: -1;
  background-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.8)
    ),
    url(${(props) => props.img});
  background-position: center center;
`;

const BgBanner = styled.div`
  position: relative;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  color: #fff;

  animation: 1s animate 0.5s forwards;
    @keyframes animate
    {
      100%
      {
        opacity: 1;
      }
 
    }
`;

const TrySign = styled.div`
  margin: 70px;
  text-align: center;
`;

const BgButtonI = styled.div`
 
  & a{
  background-color: red;
  border-style: none;
  width: 150px;
  padding: 10px;
  font-size: 20px;
 
  &:hover {
    cursor: pointer;
  }
}
`;

 
const BgButton = styled.a`
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  background-color: #f8c300;
  opacity: 1;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;

const Infoboxes = styled.div`
  margin-top: 20px;
`;

const BoxContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

const Box = styled.div`
  float: left;
  width: 33.3%;
  text-align: center;
  @media (max-width: 768px)
	{
		float: none;
		text-align: center;
		width: 100%;
		margin-bottom: 15%;
	}
`;

const TrySignTextArea = styled.div`
  width: 15%;
  font-size: 15px;
`;
 
const TrySignButton = styled.button`
  width: 130px;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  background-color: red;
  opacity: 1;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;

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
  NewUl,
  StyledTeamList,
  BgContent,
  BgImage,
  BgBanner,
  TeamItemContainer,
  TrySign,
  BgButtonI,
  BgButton,
  Infoboxes,
  BoxContainer,
  TrySignTextArea,
  TrySignButton,
  Box,
  ButtonDiv,
  HomeButton,
  Arrow,
};
