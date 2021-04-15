import Player from "../Player";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom"; // https://reactrouter.com/web/api/Hooks/useparams
import * as ROUTES from "../../constants/routes";
import { Link } from "react-router-dom";
import { requestOptions, SEASON_DATA } from "../../data.js";
import { getTeamStats } from "../API";
import { PieChart, LineChart } from "../Charts";
import styled from "styled-components";
import { LeagueContext, MatchesContext, buildAllMatchStats } from "../API";
import MatchFeed from "../MatchFeed";

const StyledTeamList = styled.div`
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

//change the props to only recieve team id
const TeamPage = () => {
  //gets id from route url
  let { id } = useParams();
  const [team, setTeam] = useState(null);
  const [standingData, setStandingData] = useState(null);
  const League = useContext(LeagueContext);
  const matches = useContext(MatchesContext);
  //console.log(getMatchStats(matches, id));

  //Create another fetch() to get the team data using http://api.football-data.org/v2/teams/{ID from props}

  useEffect(() => {
    //uses route to create a function call for a specific team.
    fetch(`http://api.football-data.org/v2/teams/${Number(id)}`, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        setTeam(json);
        fetch(
          `http://api.football-data.org/v2/competitions/${League}/standings`,
          requestOptions
        )
          .then((response) => response.json())
          .then((data) => {
            setStandingData(getTeamStats(data, id));
          });
      });
  }, []);
  return team && standingData ? (
    <TeamDetail standings={standingData} team={team} />
  ) : null;
  //use fetched data to render squad, name and logo of team
};

const TeamDetail = ({ team, standings }) => {
  //console.log(team);
  //console.log(standings);
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
            standings &&
            (({ won, draw, lost }) => ({ won, draw, lost }))(standings)
          }
        >
          Wins/Losses
        </PieChart>
        <PieChart
          data={
            standings &&
            (({ goalsFor, goalsAgainst }) => ({ goalsFor, goalsAgainst }))(
              standings
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

export const TeamList = ({ arr }) => {
  return (
    <StyledTeamList>
      {arr.map((item) => (
        <TeamItem key={item.id} team={item} />
      ))}
    </StyledTeamList>
  );
};
export default TeamPage;
