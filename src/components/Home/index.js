import { AuthUserContext, withAuthorization } from "../Session";
import React, { Component } from "react";
import { withFirebase } from "../Firebase";

import Player from "../Player";
import { TeamItem } from "../Team";
import styled from "styled-components";

const Background = styled.main`
  background-color: #e8e8e8;
  background-image: url("https://images.unsplash.com/photo-1459865264687-595d652de67e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Blur = styled.main`
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  height: auto;
  width: 100%;
`;

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
  height: 92vh;
`;

const StyledList = styled.div`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  max-height: 100%;
  max-width: 80%;
  span {
    text-align: center;
    vertical-align: middle;
    box-sizing: border-box;
    flex-grow: 1;
    width: 33.33%;
    padding: 0.8em 1.2em;
    overflow: hidden; // Or flex might break
    list-style: none;
    span img {
      width: 100%;
      height: auto;
    }
  }
`;

const HomePage = ({ teams }) => {
  return (
    <Background>
      <Blur>
        <Main>
          <Content>
            <h1>Home</h1>
            <p>The Home Page is accessible by every signed in user.</p>
            <List arr={teams} />
            {/* <Messages /> */}
          </Content>
        </Main>
      </Blur>
    </Background>
  );
};

const List = ({ arr }) => {
  return (
    <StyledList>
      {arr.map((item) => (
        <TeamItem key={item.id} team={item} />
      ))}
    </StyledList>
  );
};

const condition = (authUser) => !!authUser;
export default withAuthorization(condition)(HomePage);
