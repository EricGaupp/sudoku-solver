import { action, computed, observable } from "mobx";
import { RootStore } from "./RootStore";
import { NumberRange, SudokuGrid } from "../types/SudokuTypes";

export class PuzzleStore {
  rootStore: RootStore;
  @observable puzzleState: SudokuGrid = [
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

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @action
  setNumber(x: number, y: number, value: NumberRange) {
    this.puzzleState[x][y] = value;
  }

  @action
  handleSolveClick() {
    console.log(this.puzzleState);
  }

  @computed
  get testLength() {
    return this.puzzleState.length;
  }
}
