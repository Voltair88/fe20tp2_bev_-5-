import styled from "styled-components";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const MatchFeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  max-width: 100%;
`;

const MatchFeedList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  h4 {
    width: 100%;
    padding: 5%;
  }
`;

const StyledMatchItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  vertical-align: middle;
  box-sizing: border-box;
  width: 100%;
  padding: 1rem;
  overflow: hidden; // Or flex might break
  list-style: none;
  span {
    width: 20%;
    padding: 1em;
    box-sizing: border-box;
    flex-grow: 1;
  }
  span:first-child {
    width: 100%;
  }
  span:nth-child(2),
  span:nth-child(6) {
    line-height: 112px;
  }
  span:nth-child(3),
  span:nth-child(4),
  span:nth-child(5) {
    font-size: 2rem;
  }
`;

const MatchItem = ({ match }) => {
  return (
    <StyledMatchItem>
      <span>{match.stage.replace(/_/gi, " ")}</span>
      <span>{match.homeTeam.name}</span>
      <span>
        {match.score.fullTime.homeTeam ? match.score.fullTime.homeTeam : 0}
      </span>
      <span>-</span>
      <span>
        {match.score.fullTime.awayTeam ? match.score.fullTime.awayTeam : 0}
      </span>
      <span>{match.awayTeam.name}</span>
      <span>
        <Link to={`${ROUTES.MATCH}/${match.id}`}>Details</Link>
      </span>
    </StyledMatchItem>
  );
};

const MatchFeed = ({ matches }) => {
  if (!matches) {
    return null;
  }

  return (
    <MatchFeedContainer>
      <h3>Match Feed</h3>
      <MatchFeedList>
        <h4>Upcoming</h4>
        {matches
          .filter((item) => item.status !== "FINISHED")
          .filter((item) => item.status !== "AWARDED")
          .map((item) => (
            <MatchItem key={item.id} match={item} />
          ))}
      </MatchFeedList>
      <MatchFeedList>
        <h4>Completed</h4>
        {matches
          .filter((item) => item.status === "FINISHED")
          .map((item) => (
            <MatchItem key={item.id} match={item} />
          ))}
      </MatchFeedList>
    </MatchFeedContainer>
  );
};

export default MatchFeed;
