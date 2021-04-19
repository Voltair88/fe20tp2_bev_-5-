import styled from 'styled-components';
import {Background, Main, Blur, Content, H1, P, BgImage, BgContent, BgBanner} from "../../theme/StyledCom";
import { Link, withRouter } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const Body = styled.html`
  scroll-behavior: smooth;
`;

const BgButtonI = styled.div`
  
  & a{
  background-color: red;
  border-style: none;
  width: 150px;
  padding: 10px;
  font-size: 20px;

  &:hover {
    cursor: pointer;
  }
}
`;

const BgButton = styled.a`
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  background-color: #f8c300;
  opacity: 1;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;

const Infoboxes = styled.div`
  margin-top: 20px;
`;

const BoxContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  overflow: hidden;
`;

const Box = styled.div`
  float: left;
  width: 33.3%;
  text-align: center;
  @media (max-width: 768px)
	{
		float: none;
		text-align: center;
		width: 100%;
		margin-bottom: 15%;
	}
`;

const TrySign = styled.div`
  margin: 70px;
  text-align: center;
`;

const TrySignTextArea = styled.div`
  width: 15%;
  font-size: 15px;
`;

const TrySignButton = styled.button`
  width: 130px;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  background-color: red;
  opacity: 1;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;



const Landing = () => {
  return (
    <Body>
        <BgBanner>
            <BgImage>
              <BgContent img={"https://wallpaperaccess.com/full/1150517.jpg"}>
                <Main>
                  <Content>
                    <H1>Welcome to Football statistics</H1>
                    <P>View your favourite teams data and statistics for free</P>
                    <BgButtonI>
                      <BgButton href="#info">Get Started</BgButton>
                    </BgButtonI>
                  </Content>
                </Main>
              </BgContent>
            </BgImage>
        </BgBanner>


        
        <Infoboxes id="info">
        <BoxContainer>
          <Box>
          <h3>Statistics</h3>
				    <p>View statistics of your favorite team and players,<br/>with a wide range to choose from. Each user can select their own favorites.</p>
          </Box>
          <Box>
            <h3>Match Data</h3>
            <p>Track upcoming, finished, and ongoing matches <br></br>with Football Statistics own match-data feature.</p>
          </Box>
          <Box>
            <h3>Theme By Choice</h3>
            <p>Football Statistics lets the user select a theme to their liking.<br></br> You can bind your own personal favorite theme to your account.</p>
          </Box>
        </BoxContainer>
        </Infoboxes>

        <TrySign>
          <h2>Like what you see?</h2>
          <p>Try out the application by signing up. Click the button below!</p>
          <TrySignButton><Link to={ROUTES.SIGN_UP}>Sign Up!</Link></TrySignButton>
        </TrySign>
    </Body>  
  );
};

export default Landing;
