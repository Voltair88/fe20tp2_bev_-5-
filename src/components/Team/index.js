import Player from "../Player";
import { useState, useEffect } from "react";
import * as ROUTES from "../../constants/routes";
import { Link } from "react-router-dom";
import { requestOptions, SEASON_DATA } from "../../data.js";
import { getTeamStats } from "../../functions.js";
import { PieChart } from "../Charts";

export const TeamPage = ({ team }) => {
  //export const TeamPage = ({ match }) => {
  const [standingData, setStandingData] = useState();
  const [pieData, setPieData] = useState();

  useEffect(() => {
    fetch(
      "http://api.football-data.org/v2/competitions/2001/standings",
      requestOptions
    )
      .then((response) => response.json())
      .then((json) => {
        setStandingData(getTeamStats(json, team.id));
      });
  }, []);
  return (
    <article>
      <figure>
        <img src={team.crestUrl} alt="team crest" />
      </figure>
      <h3>{team.name}</h3>
      <div>
        <h4>Season Performance</h4>
        <PieChart
          data={
            standingData &&
            (({ won, draw, lost }) => ({ won, draw, lost }))(standingData)
          }
        >
          Wins/Losses
        </PieChart>
        <PieChart
          data={
            standingData &&
            (({ goalsFor, goalsAgainst }) => ({ goalsFor, goalsAgainst }))(
              standingData
            )
          }
        >
          Goals
        </PieChart>
      </div>
      <div>
        <h4>Players</h4>
        {team.squad
          .filter((staff) => staff.role === "PLAYER")
          .map((item) => (
            <li key={item.id}>
              <Player player={item} />
            </li>
          ))}
      </div>
    </article>
  );
};

export const TeamItem = ({ team }) => {
  return (
    <>
      <span>
        <img src={team.crestUrl} alt="team crest" />
      </span>
      <span>{team.name}</span>
      <span>
        <Link to={`${ROUTES.TEAM}/${team.id}`}>Details</Link>
      </span>
    </>
  );
};
