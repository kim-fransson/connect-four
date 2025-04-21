import React from "react";
import { Board } from "./Board";

export default {
  component: Board,
};

const createEmptyBoard = (columns = 7, rows = 6) =>
  Array(columns)
    .fill(null)
    .map(() => Array(rows).fill(null));

const redYellow = (i) => (i % 2 === 0 ? { color: "red" } : { color: "yellow" });

export const Empty = () => {
  const board = createEmptyBoard();
  return <Board board={board} />;
};

export const FirstColumnFilled = () => {
  const board = createEmptyBoard();
  board[0] = board[0].map((_, i) => redYellow(i));
  return <Board board={board} />;
};

export const LastRowFilled = () => {
  const board = createEmptyBoard();
  for (let col = 0; col < board.length; col++) {
    board[col][5] = redYellow(col);
  }
  return <Board board={board} />;
};

export const BottomRightCornerFilled = () => {
  const board = createEmptyBoard();
  board[6][5] = { color: "red" };
  board[5][5] = { color: "yellow" };
  board[4][5] = { color: "red" };
  board[6][4] = { color: "yellow" };
  board[6][3] = { color: "red" };
  board[5][4] = { color: "yellow" };
  return <Board board={board} />;
};
