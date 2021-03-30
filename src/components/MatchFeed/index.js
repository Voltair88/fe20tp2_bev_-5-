const MatchItem = ({ match }) => {
  return (
    <div>
      <span>{match.stage}</span>
      <span>Home:{match.homeTeam.name}</span>
      <span>{match.score.fullTime.homeTeam}</span>
      <span>-</span>
      <span>Away:{match.awayTeam.name}</span>
      <span>{match.score.fullTime.awayTeam}</span>
    </div>
  );
};

const MatchFeed = ({ matches }) => {
  return (
    <div>
      {matches.map((item) => (
        <MatchItem key={item.id} match={item} />
      ))}
    </div>
  );
};

export default MatchFeed;
