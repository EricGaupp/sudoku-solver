import { action, computed, observable } from "mobx";
import { RootStore } from "./RootStore";

export class PuzzleStore {
  rootStore: RootStore;
  @observable test: string = "hello";

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @action
  handleSolveClick() {
    this.test = `${this.test}hello`;
  }

  @computed
  get testLength() {
    return this.test.length;
  }
}
