import React from "react";

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
  return (
    <Grid item container justify="center">
      <ColorButton variant="contained">Solve</ColorButton>
    </Grid>
  );
};

export default SolveButton;
