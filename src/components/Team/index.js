import Player from "../Player";

const Team = ({ team }) => (
  <article>
    <figure>
      <img src={team.crestUrl} alt="team crest" />
    </figure>
    <h4>{team.name}</h4>
    <div>
      <h5>Leagues</h5>
      <ul>
        {team.activeCompetitions.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
    <div>
      <h5>Players</h5>
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

export default Team;
