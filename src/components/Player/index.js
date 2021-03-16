const Player = ({ player }) => (
  <div>
    <span>{player.name}</span>
    {!player.position ? (
      <span>Role: {player.role}</span>
    ) : (
      <span>Role: {player.position}</span>
    )}
    <span>Nationality: {player.nationality}</span>
  </div>
);

export default Player;
