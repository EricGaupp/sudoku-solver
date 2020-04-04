import React from "react";

//MaterialUI Components
import {
  createMuiTheme,
  makeStyles,
  Theme,
  ThemeProvider
} from "@material-ui/core/styles";
import { CssBaseline, Grid } from "@material-ui/core";

//Components
import Header from "./Header";
import Puzzle from "./Puzzle";
import SolveButton from "./SolveButton";
import Solutions from "./Solutions";
import SettingsFab from "./SettingsFab";

//Utilities
import { useDarkMode } from "../utilities/useDarkMode";

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
        <Header />
        <Puzzle />
        <SolveButton />
        <Solutions />
      </Grid>
      <SettingsFab toggleDarkMode={toggleDarkMode} />
    </ThemeProvider>
  );
};

export default App;
