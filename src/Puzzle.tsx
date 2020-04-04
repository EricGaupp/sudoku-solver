import React, { useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Button, Grid, InputBase, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: { marginTop: "1em" },
  row: {
    borderLeft: `3px solid ${theme.palette.text.primary}`,
    borderRight: `3px solid ${theme.palette.text.primary}`,
    "&:nth-child(n)": {
      borderTop: `1px solid ${theme.palette.text.primary}`
    },
    "&:nth-child(3n-2)": {
      borderTop: `3px solid ${theme.palette.text.primary}`
    },
    "&:last-child": {
      borderBottom: `3px solid ${theme.palette.text.primary}`
    }
  },
  column: {
    "&:first-child": {
      borderLeft: "none"
    },
    "&:nth-child(n+2)": {
      borderLeft: `1px solid ${theme.palette.text.primary}`
    },
    "&:nth-child(3n)": {
      borderRight: `3px solid ${theme.palette.text.primary}`
    },
    "&:last-child": {
      borderRight: "none"
    }
  },
  inputBase: {
    margin: theme.spacing(1)
  },
  removedArrows: {
    textAlign: "center",
    "&::-webkit-inner-spin-button, input::-webkit-outer-spin-button": {
      WebkitAppearance: "none",
      margin: 0
    }
  }
}));

type NumberRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | "";
type SudokuRow = [
  NumberRange,
  NumberRange,
  NumberRange,
  NumberRange,
  NumberRange,
  NumberRange,
  NumberRange,
  NumberRange,
  NumberRange
];
type SudokuGrid = [
  SudokuRow,
  SudokuRow,
  SudokuRow,
  SudokuRow,
  SudokuRow,
  SudokuRow,
  SudokuRow,
  SudokuRow,
  SudokuRow
];

function setNumber(
  grid: SudokuGrid,
  x: number,
  y: number,
  value: NumberRange
): SudokuGrid {
  const newGrid = grid.map(row => [...row] as SudokuRow) as SudokuGrid;
  newGrid[x][y] = value;
  return newGrid;
}

function isValidNumber(value: number | ""): value is NumberRange {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, ""].includes(value);
}

const Puzzle: React.FC = () => {
  const classes = useStyles();
  const [grid, setGrid] = useState<SudokuGrid>([
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""]
  ]);

  function handleChange(x: number, y: number, input: string) {
    let newGridValue: number | "";
    if (parseInt(input, 10) > 0 && parseInt(input, 10) < 10) {
      newGridValue = parseInt(input, 10);
    } else if (input === "") {
      newGridValue = "";
    } else {
      return;
    }
    if (isValidNumber(newGridValue)) {
      const newGrid = setNumber(grid, x, y, newGridValue);
      setGrid(newGrid);
    }
  }

  return (
    <Grid
      className={classes.root}
      container
      direction="column"
      spacing={3}
      alignItems="center"
    >
      <Grid item container justify="center">
        <Typography variant="h2" align="center">
          Sudoku Solver
        </Typography>
      </Grid>
      <Grid item container direction="column" alignItems="center">
        {grid.map((row, xIndex) => (
          <Grid
            key={`row${xIndex}`}
            className={classes.row}
            item
            xs={11}
            md={9}
            lg={6}
            container
          >
            {row.map((column, yIndex) => (
              <Grid
                key={`x${xIndex}y${yIndex}`}
                className={classes.column}
                item
                xs
                container
              >
                <InputBase
                  className={classes.inputBase}
                  type="number"
                  fullWidth
                  inputProps={{
                    "aria-label": "naked",
                    min: 1,
                    max: 9,
                    className: classes.removedArrows
                  }}
                  onChange={event =>
                    handleChange(xIndex, yIndex, event.target.value)
                  }
                  value={grid[xIndex][yIndex]}
                />
              </Grid>
            ))}
          </Grid>
        ))}
      </Grid>

      <Grid container justify="center">
        <Button variant="contained" color="primary">
          Solve
        </Button>
      </Grid>
    </Grid>
  );
};

export default Puzzle;
