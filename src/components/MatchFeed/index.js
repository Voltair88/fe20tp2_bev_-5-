import styled from "styled-components";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const MatchFeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  max-width: 100%;
  h3 {
    font-size: 1.6rem;
    margin: 0 auto;
    margin-top: 2rem;
    padding: 1rem 0rem;
    width: 20%;
    border-bottom: 1.9px solid black;
    border-top: 1.9px solid black;
  }
`;

const MatchFeedList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  h4 {
    font-size: 1.4rem;
    width: 80%;
    margin: 0 auto;
    padding: 4%;
  }
`;

const StyledMatchItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  vertical-align: middle;
  box-sizing: border-box;
  width: 80%;
  margin: 0 auto;
  padding: 1rem;
  overflow: hidden; // Or flex might break
  list-style: none;
  border-bottom: solid 1px black;
  span {
    width: 20%;
    padding: 1em;
    box-sizing: border-box;
    flex-grow: 1;
  }
  span:first-child {
    width: 100%;
    font-weight: 400;
    font-size: 1.1rem;
  }
  span:nth-child(2),
  span:nth-child(6) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1.3rem;
    font-weight: 400;
  }
  span:nth-child(3),
  span:nth-child(4),
  span:nth-child(5) {
    font-size: 2rem;
  }
  span a {
    text-decoration: none;
    color: black;
    font-size: 1.1rem;
    font-weight: 400;
    border-bottom: 1px solid black;

    &:hover {
      color: red;
      transition: 0.3s ease-in-out;
    }
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
