import React from "react";

//MobX
import { useObserver } from "mobx-react-lite";
import { useStore } from "../index";

//MaterialUI Components
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { CssBaseline, Grid } from "@material-ui/core";

//Components
import Header from "./Header";
import Puzzle from "./Puzzle";
import PuzzleInput from "./PuzzleInput";
import SolveButton from "./SolveButton";
import Solutions from "./Solutions";
import SettingsFab from "./SettingsFab";

const useStyles = makeStyles({
  root: { marginTop: "1em" },
});

const App: React.FC = () => {
  const { puzzleStore, uiStore } = useStore();
  const classes = useStyles();

  return useObserver(() => (
    <ThemeProvider theme={createMuiTheme(uiStore.themeOptions)}>
      <CssBaseline />
      <Grid
        className={classes.root}
        container
        direction="column"
        spacing={3}
        alignItems="center"
      >
        <Header />
        <Puzzle
          gameState={puzzleStore.puzzleState}
          render={(value) => <PuzzleInput value={value} />}
        />
        <SolveButton />
        <Solutions />
      </Grid>
      <SettingsFab />
    </ThemeProvider>
  ));
};

export default App;
