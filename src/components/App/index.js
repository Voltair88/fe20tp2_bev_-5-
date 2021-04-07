import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from "styled-components";
import WebFont from 'webfontloader';
import { GlobalStyles } from '../../theme/GlobalStyles';
import {useTheme} from '../../theme/useTheme';
import ThemeSelector from '../ThemeSelector';
import Dialog from '../../Dialog';
import CreateThemeContent from '../../CreateThemeContent';
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
import ChangeTheme from '../ChangeTheme';

const Container = styled.div`

`;




function App() {
  const [scorersData, setScorersData] = useState(SCORERS_DATA.scorers);
  const [teamsData, setTeamsData] = useState(CL_TEAMS_DATA.teams);
  const [teamData, setTeamData] = useState(TEAM_DATA);
  const [matchesData, setMatchesData] = useState(
    buildAllMatchStats(CL_MATCH_DATA)
  );
  const {theme, themeLoaded, getFonts} = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);
  const [showDialog, setShowDialog] = useState(false);
  const [newTheme, setNewTheme] = useState();
  
 useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts()
      }
    });
  });

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  const manageDialog = () => {
    setShowDialog(!showDialog);
  }

  const createTheme = newTheme => {
    console.log(newTheme);
    setShowDialog(false);
    setNewTheme(newTheme);
  }


  return (
    <>
    {
      themeLoaded && <ThemeProvider theme={ selectedTheme }>
        <GlobalStyles/>
        <Container style={{fontFamily: selectedTheme.font}}>

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
            <Route exact path={ROUTES.CHANGE_THEME}>
              <ChangeTheme />
            </Route>
            <Route>
              <TeamPage team={teamData} />
            </Route>
          </Switch>
    </Router>
    </Container>
    </ThemeProvider>
    }
    </>
  );
};
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
