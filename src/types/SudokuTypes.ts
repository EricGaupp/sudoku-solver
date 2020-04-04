export type NumberRange = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | "";

export type SudokuRow = [
  NumberRange,
  NumberRange,
  NumberRange,
  NumberRange,
  NumberRange,
  NumberRange,
  NumberRange,
  NumberRange,
  NumberRange
];

export type SudokuGrid = [
  SudokuRow,
  SudokuRow,
  SudokuRow,
  SudokuRow,
  SudokuRow,
  SudokuRow,
  SudokuRow,
  SudokuRow,
  SudokuRow
];
