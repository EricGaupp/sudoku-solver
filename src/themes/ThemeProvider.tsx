import React from "react";
import { useStore } from "../store/storeSetup";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core";

export const ThemeProvider: React.FC = ({ children }) => {
  const { uiStore } = useStore();

  return <MuiThemeProvider theme={uiStore.theme}>{children}</MuiThemeProvider>;
};
