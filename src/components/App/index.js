import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withAuthentication } from "../Session";
import Navigation from "../Navigation";
import LandingPage from "../Landing";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import HomePage from "../Home";
import AccountPage from "../Account";
import AdminPage from "../Admin";
import { TeamPage } from "../Team";
import {
  SCORERS_DATA,
  CL_TEAMS_DATA,
  TEAM_DATA,
  CL_MATCH_DATA,
  SEASON_DATA,
} from "../../data.js";
import { getMatchStats, buildAllMatchStats } from "../../functions.js";

import * as ROUTES from "../../constants/routes";

const App = () => {
  const [scorersData, setScorersData] = useState(SCORERS_DATA.scorers);
  const [teamsData, setTeamsData] = useState(CL_TEAMS_DATA.teams);
  const [teamData, setTeamData] = useState(TEAM_DATA);
  const [matchesData, setMatchesData] = useState(
    buildAllMatchStats(CL_MATCH_DATA)
  );
  return (
    <Router>
      <Navigation />

      <Switch>
        <Route exact path={ROUTES.LANDING}>
          <LandingPage />
        </Route>
        <Route path={ROUTES.SIGN_UP}>
          <SignUpPage />
        </Route>
        <Route path={ROUTES.SIGN_IN}>
          <SignInPage />
        </Route>
        <Route path={ROUTES.PASSWORD_FORGET}>
          §
          <PasswordForgetPage />
        </Route>
        <Route path={ROUTES.HOME}>
          <HomePage
            matches={matchesData}
            scorers={scorersData}
            teams={teamsData}
          />
        </Route>
        <Route path={ROUTES.ACCOUNT}>
          <AccountPage />
        </Route>
        <Route path={ROUTES.ADMIN}>
          <AdminPage />
        </Route>
        <Route>
          <TeamPage team={teamData} />
        </Route>
      </Switch>
      {/*     <Route exact path={ROUTES.LANDING} component={LandingPage} />
    <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
    <Route path={ROUTES.SIGN_IN} component={SignInPage} />
    <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
    <Route path={ROUTES.HOME} component={HomePage} />
    <Route path={ROUTES.ACCOUNT} component={AccountPage} />
    <Route path={ROUTES.ADMIN} component={AdminPage} /> */}
    </Router>
  );
};
export default withAuthentication(App);
