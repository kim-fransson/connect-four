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
    playerRed: { label: "player 1", score: 0 },
    playerYellow: { label: "player 2", score: 0 },
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
    },
    playerYellow: {
      label: "player 2",
      score: 0,
    },
    currentPlayer: "yellow",
    active: false,
  },
};

export const Player1Turn = {
  args: {
    playerRed: {
      label: "player 1",
      score: 0,
    },
    playerYellow: {
      label: "player 2",
      score: 0,
    },
    currentPlayer: "red",
    isGameActive: true,
    isGameOver: false,
    winner: "",
  },
};

export const Player2Turn = {
  args: {
    playerRed: {
      "label": "player 1",
      "score": 0
    },
    playerYellow:{
      "label": "player 2",
      "score": 0
    },
    currentPlayer:"yellow",
    isGameActive: true,
    isGameOver: false,
    winner: ""
  }
};

export const GameOverDraw = {
  args: {
    playerRed: {
      "label": "player 1",
      "score": 0
    },
    playerYellow:{
      "label": "player 2",
      "score": 0
    },
    currentPlayer:"yellow",
    isGameActive: false,
    isGameOver: true,
    winner: ""
  }
};

export const Player1Win = {
  args: {
    playerRed: {
      "label": "player 1",
      "score": 0
    },
    playerYellow:{
      "label": "player 2",
      "score": 0
    },
    currentPlayer:"yellow",
    isGameActive: false,
    isGameOver: true,
    winner: "red"
  }
};

export const Player2Win = {
  args: {
    playerRed: {
      "label": "player 1",
      "score": 0
    },
    playerYellow:{
      "label": "player 2",
      "score": 0
    },
    currentPlayer:"yellow",
    isGameActive: false,
    isGameOver: true,
    winner: "yellow"
  }
};
