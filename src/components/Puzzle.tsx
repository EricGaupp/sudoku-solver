import React from "react";

//MobX
import { useObserver } from "mobx-react-lite";
import { useStore } from "../index";

//MaterialUI Components
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, InputBase } from "@material-ui/core";

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

const Puzzle: React.FC = () => {
  const { puzzleStore } = useStore();
  const classes = useStyles();

  function handleChange(y: number, x: number, input: string) {
    let newGridValue: number | "";
    if (parseInt(input, 10) > 0 && parseInt(input, 10) < 10) {
      newGridValue = parseInt(input, 10);
    } else if (input === "") {
      newGridValue = "";
    } else {
      return;
    }
    if (puzzleStore.isValidNumber(newGridValue)) {
      puzzleStore.setNumber(y, x, newGridValue);
    }
  }

  return useObserver(() => (
    <Grid item container direction="column" alignItems="center">
      {puzzleStore.puzzleState.map((row, yIndex) => (
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
                  handleChange(yIndex, xIndex, event.target.value)
                }
                value={puzzleStore.puzzleState[yIndex][xIndex]}
              />
            </Grid>
          ))}
        </Grid>
      ))}
    </Grid>
  ));
};

export default Puzzle;
