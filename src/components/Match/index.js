import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom"; // https://reactrouter.com/web/api/Hooks/useparams
import * as ROUTES from "../../constants/routes";
import { Link } from "react-router-dom";
import { requestOptions, SEASON_DATA } from "../../data.js";
import { PieChart, LineChart } from "../Charts";
import styled from "styled-components";

const MatchContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Head2Head = styled.article`
  text-align: center;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ul {
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: row;
    list-style-type: none;
    h3 {
      text-align: center;
    }
    li > h2 {
      width: 100%;
    }
    li {
      padding: 2%;
      flex-grow: 1;
    }
  }
`;

const MatchPage = () => {
  let { id } = useParams();
  const [match, setMatch] = useState(null);

  useEffect(() => {
    fetch(
      `http://api.football-data.org//v2/matches/${Number(id)}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((json) => setMatch(json));
  }, []);

  return <MatchDetail data={match && match} />;
};

const MatchDetail = ({ data }) => {
  if (!data) {
    return <p>Loading...</p>;
  }
  const { match, head2head } = data;
  console.log(match);
  console.log(head2head);
  return (
    <MatchContainer>
      <Head2Head>
        <ul>
          <li>
            <h2>
              <Link to={`${ROUTES.TEAM}/${match.homeTeam.id}`}>
                {match.homeTeam.name}
              </Link>
            </h2>
          </li>
          <li>
            <h2>VS</h2>
          </li>
          <li>
            <h2>
              <Link to={`${ROUTES.TEAM}/${match.awayTeam.id}`}>
                {match.awayTeam.name}
              </Link>
            </h2>
          </li>
        </ul>
        <h3>{match.stage.replace(/_/gi, " ")}</h3>
        {match.status == "SCHEDULED" ? (
          <p>This match has been scheduled for {match.utcDate.slice(0, 10)}</p>
        ) : null}

        {match.score.halfTime.homeTeam && match.score.halfTime.awayTeam ? (
          <ul>
            <li>{match.score.halfTime.homeTeam}</li>
            <li>Half time</li>
            <li>{match.score.halfTime.awayTeam}</li>
          </ul>
        ) : null}
        {match.score.extraTime.homeTeam && match.score.extraTime.awayTeam ? (
          <ul>
            <li>{match.score.extraTime.homeTeam}</li>
            <li>Extra time</li>
            <li>{match.score.extraTime.awayTeam}</li>
          </ul>
        ) : null}
        {match.score.penalties.homeTeam && match.score.penalties.awayTeam ? (
          <ul>
            <li>{match.score.penalties.homeTeam}</li>
            <li>Extra time</li>
            <li>{match.score.penalties.awayTeam}</li>
          </ul>
        ) : null}
        {match.score.halfTime.homeTeam && match.score.halfTime.awayTeam ? (
          <ul>
            <li>{match.score.fullTime.homeTeam}</li>
            <li>Full time</li>
            <li>{match.score.fullTime.awayTeam}</li>
          </ul>
        ) : null}
      </Head2Head>
    </MatchContainer>
  );
};

export default MatchPage;
