import React from "react";

import { Grid, Typography } from "@material-ui/core";

const Header: React.FC = () => {
  return (
    <Grid item container justify="center">
      <Typography variant="h2" align="center">
        Sudoku Solver
      </Typography>
    </Grid>
  );
};

export default Header;
