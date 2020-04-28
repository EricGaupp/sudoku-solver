import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { StoreProvider } from "../storeSetup";
import App from "./App";
import ClearButton from "./ClearButton";

describe("Clear Button", () => {
  it("Renders the clear button", () => {
    const { getByText } = render(<ClearButton />);
    const clearButton = getByText("Clear");
    expect(clearButton).toBeInTheDocument();
  });

  it("Clears the puzzle onClick", () => {
    const { getByText, getAllByDisplayValue } = render(
      <StoreProvider>
        <App />
      </StoreProvider>
    );
    const clearButton = getByText("Clear");
    fireEvent.click(clearButton);
    expect(screen.getAllByDisplayValue("", { exact: true })).toHaveLength(81);
  });
});
