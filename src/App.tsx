import React, { useState } from "react";

//MaterialUI Components
import {
  createMuiTheme,
  makeStyles,
  Theme,
  ThemeOptions,
  ThemeProvider
} from "@material-ui/core/styles";
import { CssBaseline, Grid, PaletteType } from "@material-ui/core";

//Components
import Puzzle from "./Puzzle";
import SolveButton from "./SolveButton";
import Solutions from "./Solutions";
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

const useStyles = makeStyles((theme: Theme) => ({
  root: { marginTop: "1em" }
}));

const App: React.FC = () => {
  const [themeOptions, toggleDarkMode] = useDarkMode();
  const theme = createMuiTheme(themeOptions);
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid
        className={classes.root}
        container
        direction="column"
        spacing={3}
        alignItems="center"
      >
        <Puzzle />
        <SolveButton />
        <Solutions />
      </Grid>
      <SettingsFab toggleDarkMode={toggleDarkMode} />
    </ThemeProvider>
  );
};

export default App;
