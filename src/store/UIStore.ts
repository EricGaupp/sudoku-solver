import { RootStore } from "./RootStore";
import { ThemeOptions } from "@material-ui/core";
import { action, observable } from "mobx";

export class UIStore {
  @observable themeOptions: ThemeOptions;
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.themeOptions = { palette: { type: "light" } };
  }

  @action
  toggleDarkMode() {
    this.themeOptions = {
      ...this.themeOptions,
      palette: {
        ...this.themeOptions.palette,
        type: this.themeOptions.palette?.type === "dark" ? "light" : "dark"
      }
    };
  }
}
