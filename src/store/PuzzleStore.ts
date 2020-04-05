import { action, observable } from "mobx";
import { RootStore } from "./RootStore";
import { NumberRange, SudokuGrid } from "../types/SudokuTypes";

export class PuzzleStore {
  rootStore: RootStore;
  @observable puzzleState: SudokuGrid;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    // this.puzzleState = [
    //   ["", 9, "", "", "", "", "", "", 6],
    //   ["", "", "", 9, 6, "", 4, 8, 5],
    //   ["", "", "", 5, 8, 1, "", "", ""],
    //   ["", "", 4, "", "", "", "", "", ""],
    //   [5, 1, 7, 2, "", "", 9, "", ""],
    //   [6, "", 2, "", "", "", 3, 7, ""],
    //   [1, "", "", 8, "", 4, "", 2, ""],
    //   [7, "", 6, "", "", "", 8, 1, ""],
    //   [3, "", "", "", 9, "", "", "", ""]
    // ];
    this.puzzleState = [
      [8, 9, 5, 7, 4, 2, 1, 3, 6],
      [2, 7, 1, 9, 6, 3, 4, 8, 5],
      [4, 6, "", 5, 8, 1, 7, 9, 2],
      [9, 3, 4, 6, 1, 7, 2, 5, 8],
      [5, 1, 7, 2, 3, 8, 9, 6, 4],
      [6, 8, 2, 4, 5, 9, 3, 7, 1],
      [1, 5, 9, 8, 7, 4, "", 2, 3],
      [7, 4, 6, 3, 2, 5, 8, 1, 9],
      [3, 2, 8, 1, 9, 6, 5, 4, 7]
    ];
    // this.puzzleState = [
    //   ["", "", "", "", "", "", "", "", ""],
    //   ["", "", "", "", "", "", "", "", ""],
    //   ["", "", "", "", "", "", "", "", ""],
    //   ["", "", "", "", "", "", "", "", ""],
    //   ["", "", "", "", "", "", "", "", ""],
    //   ["", "", "", "", "", "", "", "", ""],
    //   ["", "", "", "", "", "", "", "", ""],
    //   ["", "", "", "", "", "", "", "", ""],
    //   ["", "", "", "", "", "", "", "", ""]
    // ];
  }

  isValidNumber(value: number | ""): value is NumberRange {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, ""].includes(value);
  }

  solve() {
    console.log(this.puzzleState);
    for (let y = 0; y < 9; y++) {
      for (let x = 0; x < 9; x++) {
        if (this.puzzleState[y][x] === "") {
          console.log("empty space");
          for (let v = 1; v < 10; v++) {
            console.log(v);
            if (this.checkIfValuePossible(y, x, v)) {
              console.log(`${v} possible at [${y},${x}]`);
              // this.setNumber(y, x, v as NumberRange);
              // this.solve();
              // this.setNumber(y, x, "");
              action(() => (this.puzzleState[y][x] = v as NumberRange));
              console.log(this.puzzleState);
              this.solve();
              action(() => (this.puzzleState[y][x] = ""));
            }
          }
        }
      }
    }
  }

  checkIfValuePossible(y: number, x: number, value: number) {
    const rowPossible = this.checkRowForValue(y, value);
    const columnPossible = this.checkColumnForValue(x, value);
    const subSquarePossible = this.checkSubSquareForValue(y, x, value);

    if (rowPossible && columnPossible && subSquarePossible) {
      return true;
    } else {
      return false;
    }
  }

  checkRowForValue(y: number, value: number) {
    for (let i = 0; i < 9; i++) {
      if (this.puzzleState[y][i] === value) {
        return false;
      }
    }
    return true;
  }

  checkColumnForValue(x: number, value: number) {
    for (let i = 0; i < 9; i++) {
      if (this.puzzleState[i][x] === value) {
        return false;
      }
    }
    return true;
  }

  checkSubSquareForValue(y: number, x: number, value: number) {
    const x0 = Math.floor(x / 3) * 3;
    const y0 = Math.floor(y / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.puzzleState[y0 + i][x0 + j] === value) {
          return false;
        }
      }
    }
    return true;
  }

  @action
  setNumber(y: number, x: number, value: NumberRange) {
    this.puzzleState[y][x] = value;
  }
}
