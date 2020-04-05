import { PuzzleStore } from "./PuzzleStore";
import { RootStore } from "./RootStore";

describe("PuzzleStore", () => {
  it("Initializes a blank puzzle", () => {
    const puzzleStore = new PuzzleStore(new RootStore());
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        expect(puzzleStore.puzzleState[i][j]).toBe("");
      }
    }
  });
});
