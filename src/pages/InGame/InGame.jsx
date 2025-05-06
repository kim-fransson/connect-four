import { create } from "zustand";
import { InGame as InGameTemplate } from "../../templates";
import { checkGameOver, dropCounter, getAvailableColumns } from "../../utils";
import { useEffect } from "react";

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
  startTheGame: "red",
  currentPlayer: "red",
  winner: null,
  gameState: GameState.Idle,
  isTimerPaused: true,
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

      const playerRedScore = state.playerRed.score;
      const playerYellowScore = state.playerYellow.score;

      return {
        ...state,
        playerRed: {
          ...state.playerRed,
          score: winner === "red" ? playerRedScore + 1 : playerRedScore,
        },
        playerYellow: {
          ...state.playerYellow,
          score:
            winner === "yellow" ? playerYellowScore + 1 : playerYellowScore,
        },
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
      isTimerPaused: false,
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
  playAgain: () =>
    set((state) => ({
      gameState: GameState.Idle,
      startTheGame: state.startTheGame === "red" ? "yellow" : "red",
      currentPlayer: state.startTheGame === "red" ? "yellow" : "red",
      winner: null,
      board: Array.from({ length: 7 }, () => Array(6).fill(null)),
    })),
  pauseGame: () =>
    set(() => ({
      isTimerPaused: true,
    })),
  continueGame: () =>
    set(() => ({
      isTimerPaused: false,
    })),
  restartGame: () =>
    set((state) => ({
      board: Array.from({ length: 7 }, () => Array(6).fill(null)),
      isTimerPaused: true,
      gameState: GameState.Idle,
      currentPlayer: state.startTheGame,
    })),
  quitGame: () =>
    set(() => ({
      ...initialState,
    })),
  setPlayingAgainstCPU: (playingAgainstCPU) => {
    set((state) => ({
      playerYellow: {
        ...state.playerYellow,
        isCpu: playingAgainstCPU,
      },
    }));
  },
}));

export const InGame = ({ onQuitGame, playingAgainstCPU }) => {
  const board = useConnectFourStore((state) => state.board);
  const playerRed = useConnectFourStore((state) => state.playerRed);
  const playerYellow = useConnectFourStore((state) => state.playerYellow);
  const gameState = useConnectFourStore((state) => state.gameState);
  const currentPlayer = useConnectFourStore((state) => state.currentPlayer);
  const winner = useConnectFourStore((state) => state.winner);
  const isTimerPaused = useConnectFourStore((state) => state.isTimerPaused);

  const startGame = useConnectFourStore((state) => state.startGame);
  const timesUp = useConnectFourStore((state) => state.timesUp);
  const updateBoard = useConnectFourStore((state) => state.updateBoard);
  const nextPlayer = useConnectFourStore((state) => state.nextPlayer);
  const playAgain = useConnectFourStore((state) => state.playAgain);
  const pauseGame = useConnectFourStore((state) => state.pauseGame);
  const continueGame = useConnectFourStore((state) => state.continueGame);
  const restartGame = useConnectFourStore((state) => state.restartGame);
  const quiteGame = useConnectFourStore((state) => state.quitGame);
  const setPlayingAgainstCPU = useConnectFourStore(
    (state) => state.setPlayingAgainstCPU
  );

  useEffect(() => {
    setPlayingAgainstCPU(playingAgainstCPU);
  }, [playingAgainstCPU, setPlayingAgainstCPU]);

  const handleColumnClick = (column) => {
    const { board: updatedBoard, placement } = dropCounter(
      board,
      column,
      currentPlayer
    );
    updateBoard(updatedBoard, placement);
    nextPlayer();
  };

  const handleQuitGame = () => {
    quiteGame();
    onQuitGame();
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
      onPlayAgain={playAgain}
      isTimerPaused={isTimerPaused}
      onPause={pauseGame}
      onContinue={continueGame}
      onRestart={restartGame}
      onColumnClick={handleColumnClick}
      onQuit={handleQuitGame}
    />
  );
};
