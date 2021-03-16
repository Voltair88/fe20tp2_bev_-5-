import styled from "styled-components";

import {Background, Main, Blur, Content, H1, P} from '../StyledCom';



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
