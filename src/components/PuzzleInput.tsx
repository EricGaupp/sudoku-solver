import React from "react";

//MaterialUI Components
import { InputBase } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";

//Types
import { NumberRange } from "../types/SudokuTypes";

const useStyles = makeStyles((theme: Theme) => ({
  inputBase: {
    margin: theme.spacing(1),
  },
  removedArrows: {
    textAlign: "center",
    "&::-webkit-inner-spin-button, input::-webkit-outer-spin-button": {
      WebkitAppearance: "none",
      margin: 0,
    },
  },
}));

interface IPuzzleInput {
  value: NumberRange;
  x: number;
  y: number;
  handleChange: (y: number, x: number, value: number | "") => void;
}

const PuzzleInput: React.FC<IPuzzleInput> = ({ value, x, y, handleChange }) => {
  const classes = useStyles();

  function handleInputChange(input: string) {
    let newGridValue: number | "";
    if (parseInt(input, 10) > 0 && parseInt(input, 10) < 10) {
      newGridValue = parseInt(input, 10);
    } else if (input === "") {
      newGridValue = "";
    } else {
      return;
    }
    // if (puzzleStore.isValidNumber(newGridValue)) {
    //   puzzleStore.setNumber(y, x, newGridValue);
    // }
    handleChange(y, x, newGridValue);
  }

  return (
    <InputBase
      className={classes.inputBase}
      type="number"
      fullWidth
      inputProps={{
        min: 1,
        max: 9,
        className: classes.removedArrows,
        "aria-label": `Input Row ${y} Column ${x}`,
        "data-testid": `row${y}-column${x}-input`,
      }}
      onChange={(event) => handleInputChange(event.target.value)}
      value={value}
    />
  );
};

export default PuzzleInput;
