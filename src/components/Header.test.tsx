import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

it("Renders the Header", () => {
  const { getByText } = render(<Header />);
  const headerElement = getByText("Sudoku Solver");
  expect(headerElement).toBeInTheDocument();
});
