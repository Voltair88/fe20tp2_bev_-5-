import Player from "../Player";
import * as ROUTES from "../../constants/routes";
import { Link } from "react-router-dom";

export const TeamPage = ({ team }) => (
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
