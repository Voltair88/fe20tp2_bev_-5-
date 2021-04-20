import { withAuthorization } from "../Session";
import React, { useContext } from "react";
import { TeamList } from "../Team";
import MatchFeed from "../MatchFeed";
import { LineChart } from "../Charts";
import { buildAllMatchStats, MatchesContext } from "../API";
import Top20Scorers from "../Top20Scorers";
import {
  HomeMain,
  Content,
  HomeButton,
  ButtonDiv,
  Arrow,
} from "../../theme/StyledCom";
import * as ROUTES from "../../constants/routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-up";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
const HomePage = ({ teams }) => {
  const matches = useContext(MatchesContext);

  return (
    <Router>
      <HomeMain>
        <Content>
          <ScrollToTop showUnder={160}>
            <Arrow>
              {" "}
              <ArrowUpwardIcon />
            </Arrow>
          </ScrollToTop>
          <ButtonDiv>
            <HomeButton to={ROUTES.MATCHFEED}>Matchfeed </HomeButton>
            <HomeButton to={ROUTES.TOP20SCORERS}>Top 20 Scorers </HomeButton>
            <HomeButton to={ROUTES.TEAMLIST}>Team List </HomeButton>
          </ButtonDiv>
          <Switch>
            <Route path={ROUTES.TEAMLIST}>
              <TeamList arr={teams} />
            </Route>
            <Route path={ROUTES.TOP20SCORERS}>
              <Top20Scorers />
            </Route>
            <Route path={ROUTES.MATCHFEED}>
              <MatchFeed matches={matches && matches.matches} />
            </Route>
          </Switch>
        </Content>
      </HomeMain>
    </Router>
  );
};

const condition = (authUser) => !!authUser;
export default withAuthorization(condition)(HomePage);
