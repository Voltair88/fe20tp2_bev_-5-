import styled from "styled-components";
import {
  TrySignButton,
  Box,
  BoxContainer,
  Infoboxes,
  BgButton,
  BgButtonI,
  TrySign,
  Main,
  Content,
  H1,
  P,
  BgImage,
  BgContent,
  BgBanner,
} from "../../theme/StyledCom";
import { Link, withRouter } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const Landing = () => {
  return (
    <parent>
      <BgBanner>
        <BgImage>
          <BgContent img={"https://wallpaperaccess.com/full/1150517.jpg"}>
            <Main>
              <Content>
                <H1>Welcome to Football Statistics</H1>
                <P>View your favourite teams data and statistics for free</P>
                <BgButtonI>
                  <BgButton><Link to={ROUTES.SIGN_UP}>Get Started</Link></BgButton>
                </BgButtonI>
              </Content>
            </Main>
          </BgContent>
        </BgImage>
      </BgBanner>
    </parent>
  );
};

export default Landing;
