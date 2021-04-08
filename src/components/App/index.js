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
import { NewTeamPage } from "../NewTeam";
import {
  SCORERS_DATA,
  CL_TEAMS_DATA,
  TEAM_DATA,
  CL_MATCH_DATA,
  SEASON_DATA,
} from "../../data.js";

import * as ROUTES from "../../constants/routes";
import ChangeEmail from "../ChangeEmail";
import ChangePassword from "../ChangePassword";

const App = () => {
  const [scorersData, setScorersData] = useState(SCORERS_DATA.scorers);
  const [teamsData, setTeamsData] = useState(CL_TEAMS_DATA.teams);
  const [teamData, setTeamData] = useState(TEAM_DATA);
  const [matchesData, setMatchesData] = useState(CL_MATCH_DATA);

  return (
    <Router>
      <Navigation />

      <Switch>
        <Route path={ROUTES.SIGN_UP}>
          <SignUpPage />
        </Route>
        <Route path={ROUTES.SIGN_IN}>
          <SignInPage />
        </Route>
        <Route path={ROUTES.PASSWORD_FORGET}>
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
        <Route path={ROUTES.CHANGE_EMAIL}>
          <ChangeEmail />
        </Route>
        <Route path={ROUTES.CHANGE_PASSWORD}>
          <ChangePassword />
        </Route>
        <Route path={ROUTES.TEAM_DETAIL}>
          <TeamPage />
        </Route>
        <Route path={ROUTES.LANDING}>
          <LandingPage />
        </Route>
        {/* <Route>
          <TeamPage team={teamData.id} />
        </Route> */}
      </Switch>
    </Router>
  );
};
export default withAuthentication(App);
