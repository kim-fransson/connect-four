import { InGame } from "./InGame";
import { action } from "@storybook/addon-actions";

export default {
  component: InGame,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    onTimerEnd: action("onTimerEnd"),
    onColumnClick: action("onColumnClick"),
    onPlayAgain: action("onPlayAgain"),
    onStartGame: action("onStartGame"),
    onRestart: action("onRestart"),
    onPause: action("onPause"),
    onContinue: action("onContinue"),
    onQuit: action("onQuit"),
  },
};

export const Player1Ready = {
  args: {
    playerRed: { label: "player 1", score: 0, animation: "idle" },
    playerYellow: { label: "player 2", score: 0, animation: "idle" },
    currentPlayer: "red",
    isGameActive: false,
    isGameOver: false,
    winner: "",
  },
};

export const Player2ready = {
  args: {
    playerRed: {
      label: "player 1",
      score: 0,
      animation: "idle",
    },
    playerYellow: {
      label: "player 2",
      score: 0,
      animation: "idle",
    },
    currentPlayer: "yellow",
    active: false,
  },
};
