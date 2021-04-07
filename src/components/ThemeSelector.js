import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import _ from "lodash"; // https://css-tricks.com/theming-and-theme-switching-with-react-and-styled-components/
import { useTheme } from "../theme/useTheme";
import { getFromLS } from "../utils/storage";
import { AuthUserContext, withAuthentication } from "./Session";

const ThemedButton = styled.button`
  border: 0;
  display: inline-block;
  padding: 12px 24px;
  font-size: 14px;
  border-radius: 4px;
  margin-top: 5px;
  width: 100%;
  cursor: pointer;
`;

const Wrapper = styled.li`
  padding: 48px;
  text-align: center;
  border-radius: 4px;
  border: 1px solid #000;
  list-style: none;
`;

const Container = styled.ul`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 3rem;
  padding: 10px;
`;

const Header = styled.h2`
  display: flex;
  justify-content: space-around;
`;

const ThemeSelector = (props) => {
  const themesFromStore = getFromLS("all-themes");
  const [data, setData] = useState(themesFromStore.data);
  const [themes, setThemes] = useState([]);
  //const [uid, setUid] = useState([]);
  const { setMode } = useTheme();
  const authUser = useContext(AuthUserContext);
  const themeSwitcher = (selectedTheme) => {
    /* console.log(selectedTheme);
    console.log("UID"+props.user); */
    setMode(selectedTheme);
    props.setter(selectedTheme);

    //Update the firebase db Theme when change the Theme
    props.firebase.user(authUser.uid).update(
      /* props.firebase.user(props.user.uid).update */ {
        /* theme: selectedTheme.data.id  */
        theme: { name: "matias", id: 3434}
      }
    );
  };
  console.log(props);

  useEffect(() => {
    setThemes(_.keys(data));
  }, [data]);

  useEffect(() => {
    props.newTheme && updateThemeCard(props.newTheme);
  }, [props.newTheme]);

  const updateThemeCard = (theme) => {
    const key = _.keys(theme)[0];
    const updated = { ...data, [key]: theme[key] };
    setData(updated);
  };

  const ThemeCard = (props) => {
    return (
      <Wrapper
        style={{
          backgroundColor: `${data[_.camelCase(props.theme.name)].colors.body}`,
          color: `${data[_.camelCase(props.theme.name)].colors.text}`,
          fontFamily: `${data[_.camelCase(props.theme.name)].font}`,
        }}
      >
        <span>Click on the button to set this theme</span>
        <ThemedButton
          onClick={(theme) => themeSwitcher(props.theme)}
          style={{
            backgroundColor: `${
              data[_.camelCase(props.theme.name)].colors.button.background
            }`,
            color: `${data[_.camelCase(props.theme.name)].colors.button.text}`,
            fontFamily: `${data[_.camelCase(props.theme.name)].font}`,
          }}
        >
          {props.theme.name}
        </ThemedButton>
      </Wrapper>
    );
  };

  return (
    <AuthUserContext.Consumer>
      {(authUser) => (
        <div>
            {console.log(authUser)}
          <Header>Select a Theme from below</Header>
          <Container>
            {themes.length > 0 &&
              themes.map((theme) => (
                <ThemeCard theme={data[theme]} key={data[theme].id} />
              ))}
          </Container>
        </div>
      )}
    </AuthUserContext.Consumer>
  );
};

export default withAuthentication(ThemeSelector);
