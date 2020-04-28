import React from "react";
import { useObserver } from "mobx-react-lite";
import { useStore } from "../storeSetup";

//MaterialUI Components
import { Theme, withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const ColorButton = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.success.contrastText,
    backgroundColor: theme.palette.success.main,
    "&:hover": {
      backgroundColor: theme.palette.success.dark,
    },
  },
}))(Button);

const SolveButton: React.FC = () => {
  const { puzzleStore } = useStore();

  const handleSolveClick = () => {
    puzzleStore.clearSolutions();
    puzzleStore.solve();
  };

  return useObserver(() => (
    <ColorButton variant="contained" onClick={handleSolveClick}>
      Solve
    </ColorButton>
  ));
};

export default SolveButton;
