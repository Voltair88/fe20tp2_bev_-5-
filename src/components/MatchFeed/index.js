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
    border-bottom: 1.9px solid black;
    border-top: 1.9px solid black;
  }

  @media only screen and (max-width: 540px) {
    h3 {
      font-size: 1.4rem;
      margin-top: 1rem;
      padding: 0.5rem 0rem;
      width: 60%;
    }
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

  @media only screen and (max-width: 540px) {
    h4 {
      font-size: 1.2rem;
      width: 60%;
      padding-top: 3%;
    }
  }
`;

const StyledMatchItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  vertical-align: middle;
  box-sizing: border-box;
  width: 90%;
  height: auto;
  margin: 0 auto;
/*   padding: 0.2rem;
 */  overflow: hidden; // Or flex might break
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
    font-size: 1rem;
    font-weight: 400;
  }
  span:nth-child(3),
  span:nth-child(4),
  span:nth-child(5) {
    font-size: 1.5rem;
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

  @media only screen and (max-width: 540px) {
    width: 95%;
    height: auto;
    padding: 0.3rem 0rem 0rem 0rem;

    span {
      width: 19%;
      padding: 0.2rem 0.1rem;
    }

    span:first-child {
      font-size: 1rem;
    }

    span:nth-child(2),
    span:nth-child(6) {
      word-break: break-word;
      font-size: 1rem;
      width: 35%;
    }
    span:nth-child(3),
    span:nth-child(5) {
      font-weight: 600;
    }
    span:nth-child(3),
    span:nth-child(4),
    span:nth-child(5) {
      width: 5%;
      font-size: 1rem;
    }
    span:nth-child(2),
    span:nth-child(3),
    span:nth-child(4),
    span:nth-child(5),
    span:nth-child(5) {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    span a {
      font-size: 1rem;
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
