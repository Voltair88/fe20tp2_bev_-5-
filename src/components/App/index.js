import React, { useState, useEffect, useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import WebFont from "webfontloader";
import { GlobalStyles } from "../../theme/GlobalStyles";
import { useTheme } from "../../theme/useTheme";
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
import TeamPage from "../Team";
import MatchPage from "../Match";
import { NewTeamPage } from "../NewTeam";
import {
  requestOptions,
  SCORERS_DATA,
  CL_TEAMS_DATA,
  TEAM_DATA,
  CL_MATCH_DATA,
  SEASON_DATA,
} from "../../data.js";
import { getMatchStats, buildAllMatchStats } from "../API/functions";
import { MatchesContext, LeagueContext } from "../API";
import { AuthUserContext } from "../Session";
import * as ROUTES from "../../constants/routes";
import ChangeEmail from "../ChangeEmail";
import ChangePassword from "../ChangePassword";
import ChangeTheme from "../ChangeTheme";

const Container = styled.div``;

function App() {
  const [scorersData, setScorersData] = useState(SCORERS_DATA.scorers);
  const [teamsData, setTeamsData] = useState(null);
  const [teamData, setTeamData] = useState(TEAM_DATA);
  const [matchesData, setMatchesData] = useState(null);
  const { theme, themeLoaded, getFonts } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);
  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts(),
      },
    });
  });

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  const user = useContext(AuthUserContext);
  console.log(user);

  useEffect(() => {
    fetch(
      `http://api.football-data.org/v2/competitions/${
        user ? user.league : 2001
      }/matches`,
      requestOptions
    )
      .then((response) => response.json())
      .then((json) => setMatchesData(json));

    fetch(
      `http://api.football-data.org/v2/competitions/${
        user ? user.league : 2001
      }/teams`,
      requestOptions
    )
      .then((response) => response.json())
      .then((json) => setTeamsData(json));
  }, [user]);
  return (
    <>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />
          <Container style={{ fontFamily: selectedTheme.font }}>
            <Router>
              <LeagueContext.Provider value={user && user.league}>
                <MatchesContext.Provider value={matchesData && matchesData}>
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
                        scorers={scorersData}
                        teams={teamsData && teamsData.teams}
                      />
                    </Route>
                    <Route path={ROUTES.ACCOUNT}>
                      <AccountPage />
                    </Route>
                    <Route path={ROUTES.CHANGE_THEME}>
                      <ChangeTheme />
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
                    <Route path={ROUTES.MATCH_DETAIL}>
                      <MatchPage />
                    </Route>
                    <Route path={ROUTES.LANDING}>
                      <LandingPage />
                    </Route>
                  </Switch>
                </MatchesContext.Provider>
              </LeagueContext.Provider>
            </Router>
          </Container>
        </ThemeProvider>
      )}
    </>
  );
}
export default withAuthentication(App);

/* import React, { useState, useEffect } from "react";
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
import ChangeEmail from "../ChangeEmail";
import ChangePassword from "../ChangePassword";
import styled, { ThemeProvider } from "styled-components";
import WebFont from "webfontloader";
import { GlobalStyles } from "../../theme/GlobalStyles";
import { useTheme } from "../../theme/useTheme";
import ThemeSelector from '../../ThemeSelector';

const Container = styled.div`

`;

function App() {
  const [scorersData, setScorersData] = useState(SCORERS_DATA.scorers);
  const [teamsData, setTeamsData] = useState(CL_TEAMS_DATA.teams);
  const [teamData, setTeamData] = useState(TEAM_DATA);
  const [matchesData, setMatchesData] = useState(
    buildAllMatchStats(CL_MATCH_DATA)
  );
  const { theme, themeLoaded, getFonts } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts(),
      },
    });
  });

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
            <Route exact path={ROUTES.CHANGE_EMAIL}>
              <ChangeEmail />
            </Route>
            <Route exact path={ROUTES.CHANGE_PASSWORD}>
              <ChangePassword />
            </Route>
            <Route>
              <TeamPage team={teamData} />
            </Route>
          </Switch>
    </Router>
  );
};
export default withAuthentication(App); */
