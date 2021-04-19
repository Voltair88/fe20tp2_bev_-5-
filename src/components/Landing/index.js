import styled from 'styled-components';
import {Background, Main, Blur, Content, H1, P} from "../../theme/StyledCom";

const BgBanner = styled.div`
    position: relative;
    justify-content: center;
    text-align: center;
    min-height: 100vh;
    color: #fff;
`;

const BgImage = styled.div`
    padding-top: 10em;
`;

const BgContent = styled.div`

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-background-size: cover;
    background-size: cover;
    z-index: -1;
    background-image: linear-gradient(to left, rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${props => props.img});
    background-position: center center;
    
`;

const Landing = () => {
  return (
    <BgBanner>
        <BgImage>
          <BgContent img={"https://wallpaperaccess.com/full/1150517.jpg"}>
            <Main>
              <Content>
                <H1>Welcome to Football statistics</H1>
                <P>View your favourite teams data and statistics for free</P>
              </Content>
            </Main>
          </BgContent>
        </BgImage>
      </BgBanner>
  );
};

export default Landing;
