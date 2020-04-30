import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { useStore, StoreProvider } from "../store/storeSetup";
import { SudokuGrid } from "../types/SudokuTypes";
import PuzzleBoard from "./PuzzleBoard";
import PuzzleInput from "./PuzzleInput";

const TestSetup: React.FC = () => {
  const { puzzleStore, uiStore } = useStore();
  const theme = createMuiTheme(uiStore.themeOptions);

  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </StoreProvider>
  );
};

describe("PuzzleBoard", () => {
  it("Highlights invalid guesses with a red background", () => {
    const { getByTestId } = render(<TestSetup />);
    const gridA = getByTestId("row0-column0-grid");
    const gridB = getByTestId("row0-column2-grid");
    const inputA = getByTestId("row0-column0-input");
    const inputB = getByTestId("row0-column2-input");
    expect(gridA).toHaveStyle({
      backgroundColor: "#fff",
    }); //Needs to get the vaue from theme.palette.background.default
    expect(gridB).toHaveStyle({ backgroundColor: "#fff" }); //Needs to get the value from theme.palette.background.default
    expect(inputA).toBeInTheDocument();
    expect(inputB).toBeInTheDocument();
    fireEvent.change(inputA, { target: { value: 3 } });
  });
});
