import React, { createContext, useContext } from "react";
import { RootStore } from "./store/RootStore";
import { PuzzleStore } from "./store/PuzzleStore";
import { UIStore } from "./store/UIStore";

const storeContext = createContext<RootStore>(new RootStore());

export const StoreProvider: React.FC = (props) => {
  return (
    <storeContext.Provider value={new RootStore()}>
      {props.children}
    </storeContext.Provider>
  );
};

export const useStore = (): RootStore => useContext(storeContext);

export const usePuzzleStore = (): PuzzleStore => {
  const { puzzleStore } = useContext(storeContext);
  return puzzleStore;
};

export const useUIStore = (): UIStore => {
  const { uiStore } = useContext(storeContext);
  return uiStore;
};
