import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Firebase, { FirebaseContext } from "./components/Firebase";
import * as themes from './theme/schema.json';
import { setTols } from './utils/storage';

const Index = () => {
  setTols('all-themes', themes.default);
  return(
    <App />
  )
}

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
     <Index />
    
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
