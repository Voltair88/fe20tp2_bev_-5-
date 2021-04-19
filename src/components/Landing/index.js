import styled from 'styled-components';
import {Background, Main, Blur, Content, H1, P, BgImage, BgContent} from "../../theme/StyledCom";

const BgBanner = styled.div`
    position: relative;
    justify-content: center;
    text-align: center;
    min-height: 100vh;
    color: #fff;
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
