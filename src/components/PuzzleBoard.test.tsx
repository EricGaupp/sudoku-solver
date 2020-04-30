import React from "react";
import { render } from "@testing-library/react";
import PuzzleBoard from "./PuzzleBoard";
import PuzzleInput from "./PuzzleInput";
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
  it("Highlights invalid guesses with a red background", () => {
    const { getAllByTestId } = render(
      <PuzzleBoard
        gameState={blankPuzzle}
        render={(value, x, a) => <PuzzleInput value={value} x={x} y={y} />}
      />
    );
  });
});
