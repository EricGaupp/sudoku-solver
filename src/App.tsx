import React, { useState } from "react";

//MaterialUI Components
import {
  createMuiTheme,
  ThemeOptions,
  ThemeProvider
} from "@material-ui/core/styles";
import { CssBaseline, PaletteType } from "@material-ui/core";

//Components
import Puzzle from "./Puzzle";
import SettingsFab from "./SettingsFab";

const defaultTheme: ThemeOptions = {
  palette: {
    type: "light"
  }
};

const useDarkMode = (): [ThemeOptions, () => void] => {
  const [theme, setTheme] = useState(defaultTheme);

  const type = theme.palette?.type;

  const toggleDarkMode = () => {
    const updatedThemeOptions = {
      ...theme,
      palette: {
        ...theme.palette,
        type: type === "light" ? "dark" : ("light" as PaletteType)
      }
    };
    setTheme(updatedThemeOptions);
  };

  return [theme, toggleDarkMode];
};

const App: React.FC = () => {
  const [themeOptions, toggleDarkMode] = useDarkMode();
  const theme = createMuiTheme(themeOptions);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Puzzle />
      <SettingsFab toggleDarkMode={toggleDarkMode} />
    </ThemeProvider>
  );
};

export default App;
