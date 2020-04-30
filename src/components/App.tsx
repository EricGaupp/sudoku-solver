import React from "react";

//MobX
import { useObserver } from "mobx-react-lite";
import { useStore } from "../store/storeSetup";

//MaterialUI Components
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { CssBaseline, Grid, Typography } from "@material-ui/core";

//Components
import Header from "./Header";
import PuzzleBoard from "./PuzzleBoard";
import PuzzleInput from "./PuzzleInput";
import SolveButton from "./SolveButton";
import ClearButton from "./ClearButton";
import Solutions from "./Solutions";
import SettingsFab from "./SettingsFab";

const useStyles = makeStyles({
  root: { marginTop: "1em" },
});

const App: React.FC = () => {
  const { puzzleStore, uiStore } = useStore();
  const classes = useStyles();

  return useObserver(() => (
    <>
      <CssBaseline />
      <Grid
        className={classes.root}
        container
        direction="column"
        spacing={3}
        alignItems="center"
      >
        <Grid item container justify="center">
          <Header />
        </Grid>
        <Grid item xs={11} md={9} lg={6} container>
          <PuzzleBoard
            gameState={puzzleStore.puzzleState}
            render={({ value, x, y }) => (
              <PuzzleInput
                value={value}
                handleChange={puzzleStore.handleInputChange}
                x={x}
                y={y}
              />
            )}
          />
        </Grid>
        <Grid item>
          <SolveButton />
        </Grid>
        <Grid item>
          <ClearButton />
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">{`Number of Solutions: ${puzzleStore.numSolutions}`}</Typography>
        </Grid>
        {puzzleStore.solutions.length > 0 && (
          <Grid item xs={11} md={9} lg={6} container direction="column">
            <Solutions />
          </Grid>
        )}
      </Grid>
      <SettingsFab />
    </>
  ));
};

export default App;
