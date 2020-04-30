import React, { createContext, useContext, useMemo } from "react";
import { RootStore } from "./RootStore";

const storeContext = createContext<RootStore>({} as RootStore);

export const StoreProvider: React.FC = ({ children }) => {
  const store = useMemo(() => new RootStore(), []);
  return (
    <storeContext.Provider value={store}>{children}</storeContext.Provider>
  );
};

export const useStore = (): RootStore => {
  const store = useContext(storeContext);
  if (!store) {
    throw new Error(`Cannot use 'useStore' outside of StoreProvider`);
  }
  return store;
};
