import React from "react";
import { useObserver } from "mobx-react-lite";
import { useStore } from "../index";

//MaterialUI Components
import { Theme, withStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";

const ColorButton = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.success.contrastText,
    backgroundColor: theme.palette.success.main,
    "&:hover": {
      backgroundColor: theme.palette.success.dark
    }
  }
}))(Button);

const SolveButton: React.FC = () => {
  const { puzzleStore } = useStore();

  const handleSolveClick = () => {
    puzzleStore.clearSolutions();
    puzzleStore.solve();
  };

  return useObserver(() => (
    <Grid item>
      <ColorButton variant="contained" onClick={handleSolveClick}>
        Solve
      </ColorButton>
    </Grid>
  ));
};

export default SolveButton;
