import { action, observable } from "mobx";
import { RootStore } from "./RootStore";
import { NumberRange, SudokuGrid } from "../types/SudokuTypes";

export class PuzzleStore {
  rootStore: RootStore;
  @observable puzzleState: SudokuGrid;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    // this.puzzleState = [
    //   [9, "", 6, "", 7, "", 4, "", 3],
    //   ["", "", "", 4, "", "", 2, "", ""],
    //   ["", 7, "", "", 2, 3, "", 1, ""],
    //   [5, "", "", "", "", "", 1, "", ""],
    //   ["", 4, "", 2, "", 8, "", 6, ""],
    //   ["", "", 3, "", "", "", "", "", 5],
    //   ["", 3, "", 7, "", "", "", 5, ""],
    //   ["", "", 7, "", "", 5, "", "", ""],
    //   [4, "", 5, "", 1, "", 7, "", 8]
    // ];
    this.puzzleState = [
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""]
    ];
  }

  handleSolveClick(): void {
    this.solve();
  }

  solve() {
    console.log("solving");
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (this.puzzleState[i][j] === "") {
          console.log(`Empty space at ${i}, ${j}`);
          for (let v = 1; v < 10; v++) {
            console.log(`Trying ${v} at ${i},${j}`);
            if (this.checkIfValuePossible(i, j, v)) {
              console.log(`${v} at ${i},${j} works`);
              this.setNumber(i, j, v as NumberRange);
              console.log(this.puzzleState);
              console.log("solving again");
              this.solve();
              this.setNumber(i, j, "");
            }
          }
        }
      }
    }
    console.log(this.puzzleState);
  }

  checkIfValuePossible(y: number, x: number, value: number) {
    //Checks row
    for (let i = 0; i < 9; i++) {
      if (this.puzzleState[y][i] === value) {
        return false;
      }
    }
    //Checks column
    for (let i = 0; i < 9; i++) {
      if (this.puzzleState[i][x] === value) {
        return false;
      }
    }
    //Checks inner square
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
    console.log("setting number");
    this.puzzleState[y][x] = value;
  }
}
