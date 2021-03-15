import styled from "styled-components";

const Background = styled.main`
  background-color: #e8e8e8;
  background-image: url("https://images.unsplash.com/photo-1556056504-5c7696c4c28d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2083&q=80");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Blur = styled.main`
  -webkit-backdrop-filter: blur(1.5px);
  backdrop-filter: blur(1.5px);
  height: auto;
  width: 100%;
`;

const Main = styled.main`
  box-sizing: border-box;
  display: flex;
  font-family: "Poppins", sans-serif;
  width: 100%;
  height: 92vh;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  height: 92vh;
`;

const H1 = styled.h1`
  font-size: 3rem;
  margin-top: -8vw;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 2.1rem;
  }
`;

const P = styled.p`
  font-size: 1.4rem;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0 1rem;
  }
`;

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
