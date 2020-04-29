import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { StoreProvider } from "../storeSetup";
import App from "./App";
import ClearButton from "./ClearButton";

describe("Clear Button", () => {
  it("Doesn't render when the puzzle is blank", () => {
    const { queryByText } = render(
      <StoreProvider>
        <App />
      </StoreProvider>
    );
    const clearButton = queryByText("Clear");
    expect(clearButton).not.toBeInTheDocument();
  });

  it("Renders the clear button when there is at least one value in the puzzle", () => {
    const { queryByText, getByTestId } = render(
      <StoreProvider>
        <App />
      </StoreProvider>
    );
    const input = getByTestId("row3-col4-input");
    fireEvent.change(input, { target: { value: 3 } });
    const clearButton = queryByText("Clear");
    expect(clearButton).toBeInTheDocument();
  });

  it("Clears the puzzle onClick", () => {
    const { getByTestId, getByText, getAllByDisplayValue } = render(
      <StoreProvider>
        <App />
      </StoreProvider>
    );
    const input = getByTestId("row3-col4-input");
    fireEvent.change(input, { target: { value: 3 } });
    const clearButton = getByText("Clear");
    fireEvent.click(clearButton);
    expect(getAllByDisplayValue("", { exact: true })).toHaveLength(81);
  });
});