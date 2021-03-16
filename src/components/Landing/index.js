import { Main, Content, H1, P, Blur, Background } from "../StyledCom";

const Landing = () => {
  return (
    <Background>
      <Blur>
        <Main>
          <Content>
            <H1>Welcome to Football statistics</H1>
            <P>View your favourite teams data and statistics for free</P>
          </Content>
        </Main>
      </Blur>
    </Background>
  );
};

export default Landing;
