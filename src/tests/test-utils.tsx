import React from "react";
import { render } from "@testing-library/react";
import { StoreProvider } from "../store/storeSetup";
import { ThemeProvider } from "../themes/ThemeProvider";

const Providers: React.FC = ({ children }) => {
  return (
    <StoreProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </StoreProvider>
  );
};

const customRender = (ui: React.ReactElement, options) => {
  render(ui, { wrapper: Providers, ...options });
};

export * from "@testing-library/react";

export { customRender as render };
