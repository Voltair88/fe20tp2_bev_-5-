import styled from "styled-components";

const Main = styled.main`
  box-sizing: border-box;
  display: flex;
  font-family: "Poppins", sans-serif;
  width: 100%;
  height: 92vh;
  background-color: #e8e8e8;
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
    <Main>
      <Content>
        <H1>Welcome to Football statistics</H1>

        <P>View your favourite teams data and statistics for free</P>
      </Content>
    </Main>
  );
};

export default Landing;
