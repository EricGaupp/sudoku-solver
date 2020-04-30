import React from "react";
import { fireEvent, render } from "@testing-library/react";
import PuzzleBoard from "./PuzzleBoard";
import PuzzleInput from "./PuzzleInput";
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
    const gridA = getByTestId("row4-column0-grid");
    const gridB = getByTestId("row4-column8-grid");
    const inputA = getByTestId("row4-column0-input");
    const inputB = getByTestId("row4-column8-input");
    expect(gridA).toHaveStyle(`background-color: #fafafa`);
    expect(gridB).toBeInTheDocument();
    expect(inputA).toBeInTheDocument();
    expect(inputB).toBeInTheDocument();
    fireEvent.change(inputA, { target: { value: 3 } });
  });
});
