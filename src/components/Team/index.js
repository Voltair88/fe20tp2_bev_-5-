import Player from "../Player";
import { useState, useEffect } from "react";
import * as ROUTES from "../../constants/routes";
import { Link } from "react-router-dom";
import { requestOptions, SEASON_DATA } from "../../data.js";
import { getTeamsGoalDiff } from "../../functions.js";

export const TeamPage = ({ team }) => {
  const [standingData, setStandingData] = useState(SEASON_DATA);

  /*   useEffect(() => {
    fetch(
      "http://api.football-data.org/v2/competitions/2001/standings",
      requestOptions
    )
      .then((response) => response.json())
      .then((json) => setStandingData(json));
  }, []); */

  return (
    <article>
      <figure>
        <img src={team.crestUrl} alt="team crest" />
      </figure>
      <h3>{team.name}</h3>
      <div>
        <h4>Leagues</h4>
        <ul>
          {team.activeCompetitions.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
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
        <Link to={ROUTES.TEAM}>Details</Link>
      </span>
    </>
  );
};
