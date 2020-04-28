import { PuzzleStore } from "./PuzzleStore";
import { RootStore } from "./RootStore";
import { SudokuGrid } from "../types/SudokuTypes";

// describe("Store initialization", () => {
//   it("Initializes a blank puzzle", () => {
//     const puzzleStore = new PuzzleStore(new RootStore());
//     expect(puzzleStore.puzzleState.length).toBe(9);
//     for (let i = 0; i < 9; i++) {
//       expect(puzzleStore.puzzleState[i].length).toBe(9);
//       for (let j = 0; j < 9; j++) {
//         expect(puzzleStore.puzzleState[i][j]).toBe("");
//       }
//     }
//   });
// });

describe("Algorithm for Solving Puzzle", () => {
  it("Should check that each value in the row does not equal the input", () => {
    const puzzleStore = new PuzzleStore(new RootStore());
    puzzleStore.puzzleState = [
      ["", 9, "", "", "", "", "", "", 6],
      ["", "", "", 9, 6, "", 4, 8, 5],
      ["", "", "", 5, 8, 1, "", "", ""],
      ["", "", 4, "", "", "", "", "", ""],
      [5, 1, 7, 2, "", "", 9, "", ""],
      [6, "", 2, "", "", "", 3, 7, ""],
      [1, "", "", 8, "", 4, "", 2, ""],
      [7, "", 6, "", "", "", 8, 1, ""],
      [3, "", "", "", 9, "", "", "", ""],
    ];
    expect(puzzleStore.checkRowForValue(1, 1)).toBe(true);
    expect(puzzleStore.checkRowForValue(1, 2)).toBe(true);
    expect(puzzleStore.checkRowForValue(1, 4)).toBe(false);
    expect(puzzleStore.checkRowForValue(1, 6)).toBe(false);
  });

  it("Should check that each value in the column does not equal the input", () => {
    const puzzleStore = new PuzzleStore(new RootStore());
    puzzleStore.puzzleState = [
      ["", 9, "", "", "", "", "", "", 6],
      ["", "", "", 9, 6, "", 4, 8, 5],
      ["", "", "", 5, 8, 1, "", "", ""],
      ["", "", 4, "", "", "", "", "", ""],
      [5, 1, 7, 2, "", "", 9, "", ""],
      [6, "", 2, "", "", "", 3, 7, ""],
      [1, "", "", 8, "", 4, "", 2, ""],
      [7, "", 6, "", "", "", 8, 1, ""],
      [3, "", "", "", 9, "", "", "", ""],
    ];
    expect(puzzleStore.checkColumnForValue(0, 1)).toBe(false);
    expect(puzzleStore.checkColumnForValue(0, 3)).toBe(false);
    expect(puzzleStore.checkColumnForValue(0, 8)).toBe(true);
    expect(puzzleStore.checkColumnForValue(0, 4)).toBe(true);
  });

  it("Should check that each value in the appropriate subgrid does not equal the input", () => {
    const puzzleStore = new PuzzleStore(new RootStore());
    puzzleStore.puzzleState = [
      ["", 9, "", "", "", "", "", "", 6],
      ["", "", "", 9, 6, "", 4, 8, 5],
      ["", "", "", 5, 8, 1, "", "", ""],
      ["", "", 4, "", "", "", "", "", ""],
      [5, 1, 7, 2, "", "", 9, "", ""],
      [6, "", 2, "", "", "", 3, 7, ""],
      [1, "", "", 8, "", 4, "", 2, ""],
      [7, "", 6, "", "", "", 8, 1, ""],
      [3, "", "", "", 9, "", "", "", ""],
    ];
    expect(puzzleStore.checkSubSquareForValue(0, 1, 1)).toBe(true);
    expect(puzzleStore.checkSubSquareForValue(0, 1, 9)).toBe(false);
    expect(puzzleStore.checkSubSquareForValue(8, 8, 9)).toBe(true);
    expect(puzzleStore.checkSubSquareForValue(8, 8, 2)).toBe(false);
  });

  it("Should check whether a value is possible at a given position", () => {
    const puzzleStore = new PuzzleStore(new RootStore());
    puzzleStore.puzzleState = [
      ["", 9, "", "", "", "", "", "", 6],
      ["", "", "", 9, 6, "", 4, 8, 5],
      ["", "", "", 5, 8, 1, "", "", ""],
      ["", "", 4, "", "", "", "", "", ""],
      [5, 1, 7, 2, "", "", 9, "", ""],
      [6, "", 2, "", "", "", 3, 7, ""],
      [1, "", "", 8, "", 4, "", 2, ""],
      [7, "", 6, "", "", "", 8, 1, ""],
      [3, "", "", "", 9, "", "", "", ""],
    ];

    expect(puzzleStore.checkIfValuePossible(0, 0, 9)).toBe(false);
    expect(puzzleStore.checkIfValuePossible(1, 1, 7)).toBe(true);
    expect(puzzleStore.checkIfValuePossible(8, 8, 7)).toBe(true);
    expect(puzzleStore.checkIfValuePossible(8, 8, 8)).toBe(false);
  });

  it("Should solve a puzzle", () => {
    const puzzleStore = new PuzzleStore(new RootStore());
    puzzleStore.puzzleState = [
      ["", 9, "", "", "", "", "", "", 6],
      ["", "", "", 9, 6, "", 4, 8, 5],
      ["", "", "", 5, 8, 1, "", "", ""],
      ["", "", 4, "", "", "", "", "", ""],
      [5, 1, 7, 2, "", "", 9, "", ""],
      [6, "", 2, "", "", "", 3, 7, ""],
      [1, "", "", 8, "", 4, "", 2, ""],
      [7, "", 6, "", "", "", 8, 1, ""],
      [3, "", "", "", 9, "", "", "", ""],
    ];

    const puzzleSolution: SudokuGrid = [
      [8, 9, 5, 7, 4, 2, 1, 3, 6],
      [2, 7, 1, 9, 6, 3, 4, 8, 5],
      [4, 6, 3, 5, 8, 1, 7, 9, 2],
      [9, 3, 4, 6, 1, 7, 2, 5, 8],
      [5, 1, 7, 2, 3, 8, 9, 6, 4],
      [6, 8, 2, 4, 5, 9, 3, 7, 1],
      [1, 5, 9, 8, 7, 4, 6, 2, 3],
      [7, 4, 6, 3, 2, 5, 8, 1, 9],
      [3, 2, 8, 1, 9, 6, 5, 4, 7],
    ];

    puzzleStore.solve();
    expect(puzzleStore.solutions).toContainEqual(puzzleSolution);
  });
});
