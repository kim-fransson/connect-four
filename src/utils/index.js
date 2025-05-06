export const angle = (cx, cy, ex, ey) => {
  const dy = ey - cy;
  const dx = ex - cx;
  const rad = Math.atan2(dy, dx);
  const deg = (rad * 180) / Math.PI;
  return (deg + 270) % 360; // normalize
};

export const isBetween = (val, min, max) => {
  return val > min && val < max;
};

export const normalizeDeg = (deg) => (deg + 360) % 360;

export const repeat = (pattern, times) => Array(times).fill(pattern).flat();

export const createEmptyBoard = (columns = 7, rows = 6) =>
  Array(columns)
    .fill(null)
    .map(() => Array(rows).fill(null));

// ↓ checkVertical: checks vertically downward from the placed piece
const checkVertical = (board, col, row, color) => {
  const column = board[col];
  let winningCombination = [];

  for (let i = row; i < column.length; i++) {
    if (column[i]?.color === color) {
      winningCombination.push({ col, row: i });
    } else if (winningCombination.length >= 4) {
      break;
    } else {
      winningCombination = []; // reset if broken sequence
    }
  }

  if (winningCombination.length < 4) {
    winningCombination = [];
  }

  return winningCombination;
};

// → checkHorizontal: checks horizontally across the row
const checkHorizontal = (board, row, color) => {
  let winningCombination = [];

  for (let col = 0; col < board.length; col++) {
    if (board[col][row]?.color === color) {
      winningCombination.push({ col, row });
    } else if (winningCombination.length >= 4) {
      break;
    } else {
      winningCombination = []; // reset if broken sequence
    }
  }

  if (winningCombination.length < 4) {
    winningCombination = [];
  }

  return winningCombination;
};

// ↘ checkDiagonalRight: checks from upper-left to lower-right
const checkDiagonalRight = (board, col, row, color) => {
  let winningCombination = [];
  let c = col;
  let r = row;

  while (c > 0 && r > 0) {
    c--;
    r--;
  }

  while (c < board.length && r < board[0].length) {
    if (board[c][r]?.color === color) {
      winningCombination.push({ col: c, row: r });
    } else if (winningCombination.length >= 4) {
      break;
    } else {
      winningCombination = [];
    }
    c++;
    r++;
  }

  if (winningCombination.length < 4) {
    winningCombination = [];
  }

  return winningCombination;
};

// ↗ checkDiagonalLeft: checks from bottom-left to upper-right
const checkDiagonalLeft = (board, col, row, color) => {
  let winningCombination = [];
  let c = col;
  let r = row;

  while (c > 0 && r < board[0].length - 1) {
    c--;
    r++;
  }

  while (c < board.length && r >= 0) {
    if (board[c][r]?.color === color) {
      winningCombination.push({ col: c, row: r });
    } else if (winningCombination.length >= 4) {
      break;
    } else {
      winningCombination = [];
    }
    c++;
    r--;
  }

  if (winningCombination.length < 4) {
    winningCombination = [];
  }

  return winningCombination;
};

export const checkGameOver = (board, placement, color) => {
  const tmpBoard = [...board];
  const availableColumns = getAvailableColumns(board);
  const { col, row } = placement;

  if (availableColumns.length === 0) {
    return { isGameOver: true, winningCombination: [] };
  }

  const vertical = checkVertical(board, col, row, color);
  const horizontal = checkHorizontal(board, row, color);
  const diagonalRight = checkDiagonalRight(board, col, row, color);
  const diagonalLeft = checkDiagonalLeft(board, col, row, color);

  const winningCombination = [
    ...vertical,
    ...horizontal,
    ...diagonalRight,
    ...diagonalLeft,
  ];

  if (winningCombination.length >= 4) {
    winningCombination.forEach(({ col, row }) => {
      tmpBoard[col][row] = {
        ...tmpBoard[col][row],
        highlight: true,
      };
    });
    return { isGameOver: true, winningCombination, winner: color };
  }

  return { isGameOver: false };
};

export const hasColumnSpace = (board, col) => board[col][0] === null;

export const getAvailableRowIndex = (col) => {
  const firstFilled = col.findIndex((cell) => cell !== null);
  const index = firstFilled === -1 ? col.length - 1 : firstFilled - 1;
  return index;
};

export const getAvailableColumns = (board) => {
  const available = [];

  for (let col = 0; col < board.length; col++) {
    // If the top cell (first row) in the column is null, the column is not full
    if (hasColumnSpace(board, col)) {
      available.push(col);
    }
  }

  return available;
};

export const dropCounter = (board, column, color) => {
  const tmpBoard = [...board];
  const targetCol = [...tmpBoard[column]];
  const index = getAvailableRowIndex(targetCol);

  targetCol[index] = { color };
  tmpBoard[column] = targetCol;

  return { board: tmpBoard, placement: { col: column, row: index } };
};
