import { action, observable, computed } from "mobx";
import { RootStore } from "./RootStore";
import { NumberRange, SudokuGrid } from "../types/SudokuTypes";

export class PuzzleStore {
  rootStore: RootStore;
  @observable puzzleState: SudokuGrid;
  @observable solutions: SudokuGrid[] = [];

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.puzzleState = [
      ["", 9, "", "", "", "", "", "", 6],
      ["", "", "", 9, 6, "", 4, 8, 5],
      ["", "", "", 5, 8, 1, "", "", ""],
      ["", "", 4, "", "", "", "", "", ""],
      [5, 1, 7, 2, "", "", 9, "", ""],
      [6, "", 2, "", "", "", 3, 7, ""],
      [1, "", "", 8, "", "", "", 2, ""],
      ["", "", "", "", "", "", 8, 1, ""],
      ["", "", "", "", "", "", "", "", ""]
    ];
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

  @action
  setNumber(y: number, x: number, value: NumberRange) {
    this.puzzleState[y][x] = value;
  }

  @action
  solve() {
    for (let y = 0; y < 9; y++) {
      for (let x = 0; x < 9; x++) {
        //Look for an empty space
        if (this.puzzleState[y][x] === "") {
          //Attempt to find a possible value
          for (let v = 1; v < 10; v++) {
            if (this.checkIfValuePossible(y, x, v)) {
              //If value works set it and resolve
              this.setNumber(y, x, v as NumberRange);
              this.solve();
              this.setNumber(y, x, "");
            }
          }
          return;
        }
      }
    }
    this.solutions.push(this.puzzleState.map(row => row.slice()) as SudokuGrid);
    return;
  }

  @computed
  get numSolutions() {
    return this.solutions.length;
  }

  isValidNumber(value: number | ""): value is NumberRange {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, ""].includes(value);
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
}
