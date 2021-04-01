import styled from "styled-components";

const MatchFeedContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const MatchFeedList = styled.div`
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
  }
`;

const StyledMatchItem = styled.div``;

const MatchItem = ({ match }) => {
  return (
    <StyledMatchItem>
      <span>{match.stage.replace(/_/gi, " ")}</span>
      <span>Home:{match.homeTeam.name}</span>
      <span>{match.score.fullTime.homeTeam}</span>
      <span>-</span>
      <span>Away:{match.awayTeam.name}</span>
      <span>{match.score.fullTime.awayTeam}</span>
    </StyledMatchItem>
  );
};

const MatchFeed = ({ matches }) => {
  return (
    <MatchFeedContainer>
      <MatchFeedList>
        {matches
          .filter((item) => item.status != "FINISHED")
          .map((item) => (
            <MatchItem key={item.id} match={item} />
          ))}
      </MatchFeedList>
      <MatchFeedList>
        {matches
          .filter((item) => item.status == "FINISHED")
          .map((item) => (
            <MatchItem key={item.id} match={item} />
          ))}
      </MatchFeedList>
    </MatchFeedContainer>
  );
};

export default MatchFeed;
