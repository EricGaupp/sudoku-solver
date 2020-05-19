import React from "react";
import { fireEvent, render } from "../tests/test-utils";
import { useStore } from "../store/storeSetup";
import { createMuiTheme } from "@material-ui/core";
import PuzzleBoard from "./PuzzleBoard";
import PuzzleInput from "./PuzzleInput";

const muiTheme = createMuiTheme({ palette: { type: "dark" } });
const TestSetup: React.FC = () => {
  const { puzzleStore } = useStore();

  return (
    <PuzzleBoard
      gameState={puzzleStore.puzzleState}
      render={({ value, x, y }) => (
        <PuzzleInput
          value={value}
          handleChange={puzzleStore.handleInputChange}
          x={x}
          y={y}
        />
      )}
    />
  );
};

describe("PuzzleBoard", () => {
  it("Highlights invalid guesses with a red background", () => {
    const { getByTestId } = render(<TestSetup />);
    const gridA = getByTestId("row0-column0-grid");
    const gridB = getByTestId("row0-column2-grid");
    const inputA = getByTestId("row0-column0-input");
    const inputB = getByTestId("row0-column2-input");
    console.log(muiTheme.palette.background.default);
    console.log(gridA.style.backgroundColor);
    expect(gridA).toHaveStyle({
      backgroundColor: muiTheme.palette.background.default,
    }); //Needs to get the vaue from theme.palette.background.default
    expect(gridB).toHaveStyle({ backgroundColor: "#fff" }); //Needs to get the value from theme.palette.background.default
    expect(inputA).toBeInTheDocument();
    expect(inputB).toBeInTheDocument();
    fireEvent.change(inputA, { target: { value: 3 } });
  });
});
