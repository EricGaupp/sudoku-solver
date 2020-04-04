import React from "react";

//MobX
import { useObserver } from "mobx-react-lite";
import { useStore } from "../index";

//MaterialUI Components
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, InputBase } from "@material-ui/core";

//Types
import { NumberRange } from "../types/SudokuTypes";

const useStyles = makeStyles((theme: Theme) => ({
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

function isValidNumber(value: number | ""): value is NumberRange {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, ""].includes(value);
}

const Puzzle: React.FC = () => {
  const { puzzleStore } = useStore();
  const classes = useStyles();

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
      puzzleStore.setNumber(x, y, newGridValue);
    }
  }

  return useObserver(() => (
    <Grid item container direction="column" alignItems="center">
      {puzzleStore.puzzleState.map((row, xIndex) => (
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
                  min: 1,
                  max: 9,
                  className: classes.removedArrows
                }}
                onChange={event =>
                  handleChange(xIndex, yIndex, event.target.value)
                }
                value={puzzleStore.puzzleState[xIndex][yIndex]}
              />
            </Grid>
          ))}
        </Grid>
      ))}
    </Grid>
  ));
};

export default Puzzle;
