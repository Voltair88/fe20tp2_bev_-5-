import React, { useState, createContext } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";
import { StyledBurger } from "../../theme/StyledCom";

export const OpenContext = createContext(null);

export const Burger = () => {
  const [open, setOpen] = useState(false);
  return (
    <OpenContext.Provider value={open}>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav />
    </OpenContext.Provider>
  );
};
