import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

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
  const newGrid = grid;
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
    let number: number;
    if (input) {
      number = parseInt(input);
      if (isValidNumber(number)) {
        const newGrid = setNumber(grid, x, y, number);
        console.log(grid, x, y, number);
        setGrid(newGrid);
        console.log(grid);
      } else {
        console.log("invalid number");
      }
    }
  }

  return (
    <Grid
      className={classes.root}
      container
      direction="column"
      alignItems="center"
    >
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
  );
};

export default Puzzle;
