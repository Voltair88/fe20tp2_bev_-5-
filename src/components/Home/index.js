import { withAuthorization } from "../Session";
import React, { useContext } from "react";
import { TeamList } from "../Team";
import MatchFeed from "../MatchFeed";
import { LineChart } from "../Charts";
import { buildAllMatchStats, MatchesContext } from "../API";
import Top20Scorers from "../Top20Scorers";
import { HomeMain, Content, HomeButton, ButtonDiv } from "../../theme/StyledCom";
import * as ROUTES from "../../constants/routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const HomePage = ({ teams }) => {
  const matches = useContext(MatchesContext);

  return (
    <Router>
    <HomeMain>
      <Content>
        <ButtonDiv>
        <HomeButton to={ROUTES.MATCHFEED}>Matchfeed </HomeButton>
        <HomeButton to={ROUTES.TOP20SCORERS}>Top20Scorers </HomeButton>
        <HomeButton to={ROUTES.TEAMLIST}>TeamList </HomeButton>
        </ButtonDiv>
          <Switch>
          <Route path={ROUTES.TEAMLIST}>
            <TeamList arr={teams} />
          </Route>
          <Route path={ROUTES.TOP20SCORERS}>
            <Top20Scorers />
          </Route>
  {/*         <Route path={ROUTES.MATCHFEED}>
            <MatchFeed matches={matches.matches} />
          </Route> */}
          </Switch>
        {/* 
        {matches ? (
          <LineChart data={buildAllMatchStats(matches)} />
        ) : (
          <p>loading...</p>
        )}

        <Top20Scorers />

        {matches ? <MatchFeed matches={matches.matches} /> : <p>loading...</p>}
        {teams ? <TeamList arr={teams} /> : <p>loading...</p>}
 */}{" "}
      </Content>
    </HomeMain>
    </Router>

  );
};

const condition = (authUser) => !!authUser;
export default withAuthorization(condition)(HomePage);
