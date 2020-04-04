import { PuzzleStore } from "./PuzzleStore";
import { UIStore } from "./UIStore";

export class RootStore {
  puzzleStore: PuzzleStore;
  uiStore: UIStore;

  constructor() {
    this.puzzleStore = new PuzzleStore(this);
    this.uiStore = new UIStore(this);
  }
}
