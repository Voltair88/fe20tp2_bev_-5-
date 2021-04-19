import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import _ from "lodash"; // https://css-tricks.com/theming-and-theme-switching-with-react-and-styled-components/
import { useTheme } from "../theme/useTheme";
import { getFromLS } from "../utils/storage";
import { AuthUserContext, withAuthentication } from "./Session";
import SnackbarComponent from "./SnackbarComponent";

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
  width: 60%;
  padding: 48px;
  margin: 0 auto;
  text-align: center;
  border-radius: 4px;
  border: 1px solid #000;
  list-style: none;

  @media only screen and (max-width: 540px) {
    width: 50%;
    margin-bottom: 1rem;
  }
`;

const Container = styled.ul`
  padding: 0;
  display: grid;
  grid-template-areas: "a a a";
  max-width: 100%;
  grid-gap: 1rem;
  /* gap: 1rem;
  margin-top: 3rem;
  /* padding: 10px; */

  @media only screen and (max-width: 540px) {
    width: 100%;
    grid-template-areas: "a";
    grid-gap: 0.5rem;
  }
`;

const Header = styled.h2`
  display: flex;
  justify-content: space-around;

  @media only screen and (max-width: 540px) {
    font-size: 1.2rem;
  }
`;

const ThemeSelector = (props) => {
  const authUser = useContext(AuthUserContext);
  const themesFromStore = getFromLS("all-themes");
  const [data, setData] = useState(themesFromStore.data);
  const [themes, setThemes] = useState([]);
  const { setMode } = useTheme();

  //Used to display messages in snackbar
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");

  const handleSnackbar = (message, severity) => {
    setMessage(message);
    setSeverity(severity);
  };

  const clearSnackbar = () => {
    setMessage("");
    setSeverity("");
  };

  const themeSwitcher = (selectedTheme) => {
    setMode(selectedTheme);
    props.setter(selectedTheme);

    if (
      props.firebase.user(authUser.uid).update({
        theme: {
          name: selectedTheme.name,
          id: selectedTheme.id,
        },
      })
    ) {
      handleSnackbar("Successfully updated the theme", "success");
    } else {
      handleSnackbar("Error updating theme", "error");
    }

    window.location.reload();
  };
  /* console.log(props); */

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
    if (!!props.theme.name) {
    }
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
          <Header>Select a Theme from below</Header>
          <Container>
            {themes.length > 0 &&
              themes.map((theme) => (
                <ThemeCard theme={data[theme]} key={data[theme].id} />
              ))}

            {message !== "" ? (
              <SnackbarComponent
                severity={severity}
                message={message}
                clearSnackbar={clearSnackbar}
              />
            ) : null}
          </Container>
        </div>
      )}
    </AuthUserContext.Consumer>
  );
};

export default withAuthentication(ThemeSelector);
