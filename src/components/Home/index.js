import { AuthUserContext, withAuthorization } from "../Session";
import React, { Component, useEffect, useContext } from "react";
import { withFirebase } from "../Firebase";
import Player from "../Player";
import { TeamList } from "../Team";
import MatchFeed from "../MatchFeed";
import styled from "styled-components";
import { LineChart, PieChart, Test, LineChartNew } from "../Charts";
import { HorizontalBar } from "react-chartjs-2";
import { buildAllMatchStats, MatchesContext } from "../API";
import { SEASON_DATA, CL_MATCH_DATA } from "../../data";
import Top20Scorers from "../Top20Scorers";

import {
  Background,
  ChartContainer,
  Blur,
  HomeMain,
  Content,
} from "../StyledCom";

const HomePage = ({ teams, scorers }) => {
  /* console.log(matches) */
  const matches = useContext(MatchesContext);

  return (
    <HomeMain>
      <Content>
        <h1>Home</h1>
        <p>The Home Page is accessible by every signed in user.</p>
        {/* <BarChart scorers={scorers} /> */}
        {matches ? (
          <LineChart data={buildAllMatchStats(matches)} />
        ) : (
          <p>loading...</p>
        )}

        <Top20Scorers />

        {matches ? (
          <MatchFeed matches={matches.matches} />
        ) : (
          <p>loading...</p>
        )}
        {teams ? <TeamList arr={teams} /> : <p>loading...</p>}
      </Content>
    </HomeMain>
  );
};

//const goals = [];
//const player = [];

const BarChart = ({ scorers }) => {
  const goals = scorers.map((item) => item.numberOfGoals);

  /* Set data to array to display in chart */

  const player = scorers.map((item) => item.player.name);
  return (
    <ChartContainer>
      <HorizontalBar
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
