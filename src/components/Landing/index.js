import {Main, Content, H1, P, BgImage, BgContent, BgBanner} from "../../theme/StyledCom";


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
