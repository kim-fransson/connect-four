import { create } from "zustand";
import { InGame as InGameTemplate } from "../../templates";
import { checkGameOver, dropCounter, getAvailableColumns } from "../../utils";

const GameState = {
  Idle: "IDLE",
  Paused: "PAUSED",
  Active: "ACTIVE",
  GameOver: "GAME_OVER",
};

const initialState = {
  board: Array.from({ length: 7 }, () => Array(6).fill(null)),
  playerRed: {
    score: 0,
    isCpu: false,
  },
  playerYellow: {
    score: 0,
    isCpu: false,
  },
  currentPlayer: "red",
  gameState: GameState.Idle,
};

const useConnectFourStore = create((set) => ({
  ...initialState,
  updateBoard: (board, placement) => {
    set((state) => {
      const { isGameOver, winner } = checkGameOver(
        board,
        placement,
        state.currentPlayer
      );

      return {
        ...state,
        board,
        gameState: isGameOver ? GameState.GameOver : GameState.Active,
        winner,
      };
    });
  },
  nextPlayer: () =>
    set((state) => ({
      currentPlayer: state.currentPlayer === "red" ? "yellow" : "red",
    })),
  startGame: () =>
    set(() => ({
      gameState: GameState.Active,
    })),
  timesUp: () =>
    set((state) => {
      const board = [...state.board.map((row) => [...row])];
      const availableColumns = getAvailableColumns(board);
      const randomIndex = Math.floor(Math.random() * availableColumns.length);
      const randomCol = availableColumns[randomIndex];
      const { board: updatedBoard, placement } = dropCounter(
        board,
        randomCol,
        state.currentPlayer
      );

      state.updateBoard(updatedBoard, placement); // update the board
      state.nextPlayer(); // switch to the next player

      return {};
    }),
}));

export const InGame = () => {
  const board = useConnectFourStore((state) => state.board);
  const playerRed = useConnectFourStore((state) => state.playerRed);
  const playerYellow = useConnectFourStore((state) => state.playerYellow);
  const gameState = useConnectFourStore((state) => state.gameState);
  const currentPlayer = useConnectFourStore((state) => state.currentPlayer);
  const winner = useConnectFourStore((state) => state.winner);

  const startGame = useConnectFourStore((state) => state.startGame);
  const timesUp = useConnectFourStore((state) => state.timesUp);
  const updateBoard = useConnectFourStore((state) => state.updateBoard);
  const nextPlayer = useConnectFourStore((state) => state.nextPlayer);

  const handleColumnClick = (column) => {
    const { board: updatedBoard, placement } = dropCounter(
      board,
      column,
      currentPlayer
    );
    updateBoard(updatedBoard, placement);
    nextPlayer();
  };

  return (
    <InGameTemplate
      board={board}
      playerRed={playerRed}
      playerYellow={playerYellow}
      currentPlayer={currentPlayer}
      winner={winner}
      isGameActive={gameState === GameState.Active}
      isGameOver={gameState === GameState.GameOver}
      onStartGame={startGame}
      onTimerEnd={timesUp}
      onColumnClick={handleColumnClick}
    />
  );
};
