import React from "react";
import { action } from "@storybook/addon-actions";

import { Board } from "./Board";

export default {
  component: Board,
  parameters: {
    layout: "centered",
  },
  args: {
    onColumnClick: (col) => action("columnClicked")(col),
    currentPlayer: "red",
  },
};

const createEmptyBoard = (columns = 7, rows = 6) =>
  Array(columns)
    .fill(null)
    .map(() => Array(rows).fill(null));

const redYellow = (i) => (i % 2 === 0 ? { color: "red" } : { color: "yellow" });

export const Empty = (args) => {
  const board = createEmptyBoard();
  return <Board {...args} board={board} />;
};

export const FirstColumnFilled = (args) => {
  const board = createEmptyBoard();
  board[0] = board[0].map((_, i) => redYellow(i));
  return <Board {...args} board={board} />;
};

export const LastRowFilled = (args) => {
  const board = createEmptyBoard();
  for (let col = 0; col < board.length; col++) {
    board[col][5] = redYellow(col);
  }
  return <Board {...args} board={board} />;
};

export const BottomRightCornerFilled = (args) => {
  const board = createEmptyBoard();
  board[6][5] = { color: "red" };
  board[5][5] = { color: "yellow" };
  board[4][5] = { color: "red" };
  board[6][4] = { color: "yellow" };
  board[6][3] = { color: "red" };
  board[5][4] = { color: "yellow" };
  return <Board {...args} board={board} />;
};

export const Highlight = (args) => {
  const board = createEmptyBoard();
  board[6][2] = { color: "red", highlight: true };
  board[6][3] = { color: "red", highlight: true };
  board[6][4] = { color: "red", highlight: true };
  board[6][5] = { color: "red", highlight: true };
  return <Board {...args} board={board} />;
};

export const CurrentPlayerRed = (args) => {
  const board = createEmptyBoard();
  return <Board {...args} board={board} currentPlayer="red" />;
};
