import styled from 'styled-components';
import { BoxContainer, Infoboxes, BgButton, BgButtonI, TrySign, Background, Main, Blur, Content, H1, P, BgImage, BgContent, BgBanner} from "../../theme/StyledCom";
import { Link, withRouter } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
 

 
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
    <body>
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
            <p>Track upcoming, finished, and ongoing matches. With Football Statistics own match-data feature.</p>
          </Box>
          <Box>
            <h3>Theme By Choice</h3>
            <p>Football Statistics lets the user select a theme to their liking. You can bind your own personal favorite theme to your account.</p>
          </Box>
        </BoxContainer>
        </Infoboxes>
 
        <TrySign>
          <h2>Like what you see?</h2>
          <p>Try out the application by signing up. Click the button below!</p>
          <TrySignButton><Link to={ROUTES.SIGN_UP}>Sign Up!</Link></TrySignButton>
        </TrySign>
    </body>  
  );
};
 
export default Landing;