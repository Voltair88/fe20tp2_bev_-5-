import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom"; // https://reactrouter.com/web/api/Hooks/useparams

import { requestOptions, SEASON_DATA } from "../../data.js";
import { PieChart, LineChart } from "../Charts";
import styled from "styled-components";

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
    <div>
      <div>
        <h3>{match.homeTeam.name}</h3>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div>
        <h3>{match.awayTeam.name}</h3>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default MatchPage;
