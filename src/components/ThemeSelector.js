import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import _ from "lodash"; // https://css-tricks.com/theming-and-theme-switching-with-react-and-styled-components/
import { useTheme } from "../theme/useTheme";
import { getFromLS } from "../utils/storage";
import { AuthUserContext, withAuthentication } from "./Session";
import { SCHEMA } from "./Schema"

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
  const authUser = useContext(AuthUserContext);
  const themesFromStore = getFromLS("all-themes");
  const [data, setData] = useState(themesFromStore.data);
  /* const [data, setData] = useState(authUser.theme); */
  const [themes, setThemes] = useState([]);
  const { setMode } = useTheme();
  
  const themeSwitcher = (selectedTheme) => {

    setMode(selectedTheme);
    props.setter(selectedTheme);

    if (props.firebase.user(authUser.uid).update({
      theme: { name: selectedTheme.name, 
                  id: selectedTheme.id
        }
    })) {
      console.log("Successfully updated theme");
    } else {
        console.log("Error updating theme");
    }

    window.location.reload();

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

  const refreshPage = ()=>{
 }

  const ThemeCard = (props) => {
    if(!!props.theme.name){
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
          </Container>
        </div>
      )}
    </AuthUserContext.Consumer>
  );
};

export default withAuthentication(ThemeSelector);
