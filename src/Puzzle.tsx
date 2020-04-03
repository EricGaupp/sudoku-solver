import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: { marginTop: "1em" },
  column: {
    border: "3px black solid"
  }
});

type NumberRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
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
  const newGrid = grid.map(row => row.slice() as SudokuRow) as SudokuGrid;
  newGrid[x][y] = value;
  return newGrid;
}

function isValidNumber(value: number): value is NumberRange {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9].includes(value);
}

const Puzzle: React.FC = () => {
  const classes = useStyles();
  const [grid, setGrid] = useState<SudokuGrid>([
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9]
  ]);

  function handleClick(x: number, y: number) {
    const input = prompt();
    console.log(input);
    let number: number;
    if (input) {
      number = parseInt(input);
      if (isValidNumber(number)) {
        const newGrid = setNumber(grid, x, y, number);
        setGrid(newGrid);
        console.log(grid);
      }
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
        <Typography variant="h2">Sudoku Solver</Typography>
      </Grid>
      <Grid item container direction="column" alignItems="center">
        {grid.map((row, xIndex) => (
          <Grid
            key={`row${xIndex}`}
            item
            xs={12}
            md={9}
            lg={6}
            container
            justify="center"
          >
            {row.map((column, yIndex) => (
              <Grid
                key={`x${xIndex}y${yIndex}`}
                className={classes.column}
                item
                xs
                container
                justify="center"
                onClick={() => handleClick(xIndex, yIndex)}
              >
                {column}
              </Grid>
            ))}
          </Grid>
        ))}
      </Grid>

      <Grid container justify="center">
        <Button variant="contained">Solve</Button>
      </Grid>
    </Grid>
  );
};

export default Puzzle;
