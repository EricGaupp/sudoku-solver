import React, { ReactNode } from "react";

//MaterialUI Components
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

//Types
import { NumberRange, SudokuGrid } from "../types/SudokuTypes";

const useStyles = makeStyles((theme: Theme) => ({
  row: {
    borderLeft: `3px solid ${theme.palette.text.primary}`,
    borderRight: `3px solid ${theme.palette.text.primary}`,
    "&:nth-child(n)": {
      borderTop: `1px solid ${theme.palette.text.primary}`,
    },
    "&:nth-child(3n-2)": {
      borderTop: `3px solid ${theme.palette.text.primary}`,
    },
    "&:last-child": {
      borderBottom: `3px solid ${theme.palette.text.primary}`,
    },
  },
  column: {
    "&:first-child": {
      borderLeft: "none",
    },
    "&:nth-child(n+2)": {
      borderLeft: `1px solid ${theme.palette.text.primary}`,
    },
    "&:nth-child(3n)": {
      borderRight: `3px solid ${theme.palette.text.primary}`,
    },
    "&:last-child": {
      borderRight: "none",
    },
  },
}));

interface IPuzzleBoard {
  gameState: SudokuGrid;
  render: (value: NumberRange) => ReactNode;
}

const PuzzleBoard: React.FC<IPuzzleBoard> = ({ gameState, render }) => {
  const classes = useStyles();

  return (
    <Grid item container direction="column" alignItems="center">
      {gameState.map((row, yIndex) => (
        <Grid
          key={`row${yIndex}`}
          className={classes.row}
          item
          xs={11}
          md={9}
          lg={6}
          container
        >
          {row.map((column, xIndex) => (
            <Grid
              key={`y${yIndex}x${xIndex}`}
              className={classes.column}
              item
              xs
              container
            >
              {render(gameState[yIndex][xIndex])}
            </Grid>
          ))}
        </Grid>
      ))}
    </Grid>
  );
};

export default PuzzleBoard;
