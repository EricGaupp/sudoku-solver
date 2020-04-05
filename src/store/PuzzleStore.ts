import { action, computed, observable } from "mobx";
import { RootStore } from "./RootStore";
import { NumberRange, SudokuGrid } from "../types/SudokuTypes";

export class PuzzleStore {
  rootStore: RootStore;
  @observable puzzleState: SudokuGrid;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
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
    // this.recursivelySolve(this.puzzleState);
    console.log("checking values");
    console.log(this.checkIfValuePossible(5, 2, 3));
  }

  recursivelySolve(puzzle: SudokuGrid) {}

  checkIfValuePossible(x: number, y: number, value: number) {
    //Checks column
    for (let i = 0; i < 9; i++) {
      console.log(this.puzzleState[i][x]);
      if (this.puzzleState[i][x] === value) {
        return false;
      }
    }
    //Checks row
    for (let i = 0; i < 9; i++) {
      console.log(this.puzzleState[y][i]);
      if (this.puzzleState[y][i] === value) {
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
  setNumber(x: number, y: number, value: NumberRange) {
    this.puzzleState[x][y] = value;
  }

  @computed
  get testLength() {
    return this.puzzleState.length;
  }
}
