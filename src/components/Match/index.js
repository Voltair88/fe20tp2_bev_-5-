import Player from "../Player";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom"; // https://reactrouter.com/web/api/Hooks/useparams
import * as ROUTES from "../../constants/routes";
import { Link } from "react-router-dom";
import { requestOptions, SEASON_DATA } from "../../data.js";
import { getTeamStats } from "../API";
import { PieChart, LineChart } from "../Charts";
import styled from "styled-components";
import { LeagueContext, MatchesContext } from "../API";

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

  return <MatchDetail match={match} />;
};

const MatchDetail = ({ match }) => {
  console.log(match);
  return <div></div>;
};

export default MatchPage;
