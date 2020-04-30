import React from "react";
import { fireEvent, render } from "@testing-library/react";
import App from "./App";
import { StoreProvider } from "../storeSetup";
import { SudokuGrid } from "../types/SudokuTypes";

const blankPuzzle: SudokuGrid = [
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
];

describe("PuzzleBoard", () => {
  //   xit("Highlights invalid guesses with a red background", () => {
  //     const { getAllByTestId } = render(
  //       <PuzzleBoard
  //         gameState={blankPuzzle}
  //         render={({ value, x, y }) => (
  //           <PuzzleInput value={value} x={x} y={y} handleChange={} />
  //         )}
  //       />
  //     );
  //   });

  it("Highlights invalid guesses with a red background", () => {
    const { getByTestId } = render(
      <StoreProvider>
        <App />
      </StoreProvider>
    );
    const gridA = getByTestId("row0-column0-grid");
    const gridB = getByTestId("row0-column2-grid");
    const inputA = getByTestId("row0-column0-input");
    const inputB = getByTestId("row0-column2-input");
    expect(gridA).toHaveStyle({ backgroundColor: "#fafafa" }); //Needs to get the vaue from theme.palette.background.default
    expect(gridB).toHaveStyle({ backgroundColor: "#fafafa" }); //Needs to get the value from theme.palette.background.default
    expect(inputA).toBeInTheDocument();
    expect(inputB).toBeInTheDocument();
    fireEvent.change(inputA, { target: { value: 3 } });
  });
});
