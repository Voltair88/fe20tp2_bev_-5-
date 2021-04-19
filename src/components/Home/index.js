import { withAuthorization } from "../Session";
import React, { useContext } from "react";
import { TeamList } from "../Team";
import MatchFeed from "../MatchFeed";
import { LineChart } from "../Charts";
import { buildAllMatchStats, MatchesContext } from "../API";
import Top20Scorers from "../Top20Scorers";
import { HomeMain, Content } from "../../theme/StyledCom";

const HomePage = ({ teams }) => {
  const matches = useContext(MatchesContext);

  return (
    <HomeMain>
      <Content>
        <h1>Home</h1>
        {matches ? (
          <LineChart data={buildAllMatchStats(matches)} />
        ) : (
          <p>loading...</p>
        )}

        <Top20Scorers />

        {matches ? <MatchFeed matches={matches.matches} /> : <p>loading...</p>}
        {teams ? <TeamList arr={teams} /> : <p>loading...</p>}
      </Content>
    </HomeMain>
  );
};

const condition = (authUser) => !!authUser;
export default withAuthorization(condition)(HomePage);
