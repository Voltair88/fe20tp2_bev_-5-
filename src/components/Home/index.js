import { AuthUserContext, withAuthorization } from "../Session";
import React, { Component, useEffect } from "react";
import { withFirebase } from "../Firebase";
import Player from "../Player";
import { TeamItem } from "../Team";
import styled from "styled-components";
import { Bar, Line } from "react-chartjs-2";
import { SEASON_DATA, CL_MATCH_DATA } from "../../data";
import {
  Background,
  ChartContainer,
  Blur,
  HomeMain,
  Content,
} from "../StyledCom";

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
    padding: 0.05em 0.5em;
    overflow: hidden; // Or flex might break
    list-style: none;
    img {
      width: 100%;
      height: auto;
    }
  }
`;

const HomePage = ({ teams, scorers }) => {
  return (
    <Background>
      <Blur>
        <HomeMain>
          <Content>
            <h1>Home</h1>
            <p>The Home Page is accessible by every signed in user.</p>
            <BarChart scorers={scorers} />
            <List arr={teams} />
            {/* <ScorersList scorers={scorers} /> */}

            {/* <Messages /> */}
          </Content>
        </HomeMain>
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

/* const goals = [];
const player = []; */

const BarChart = ({ scorers }) => {
  const goals = scorers.map((item) => item.numberOfGoals);

  /* Set data to array to display in chart */

  const player = scorers.map((item) => item.player.name);
  return (
    <ChartContainer>
      <Bar
        data={{
          labels: player,
          datasets: [
            {
              label: "Goals",
              data: goals.length <= 0 ? "" : goals,

              backgroundColor: [
                "#f38b4a",
                "#56d798",
                "#ff8397",
                "#6970d5",
                "#f38b4a",
                "#56d798",
                "#f38b4a",
                "#56d798",
                "#ff8397",
                "#6970d5",
              ],
            },
          ],
        }}
        height={500}
        width={50}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </ChartContainer>
  );
};

const condition = (authUser) => !!authUser;
export default withAuthorization(condition)(HomePage);
