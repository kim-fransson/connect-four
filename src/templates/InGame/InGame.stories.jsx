import { InGame } from "./InGame";

export default {
  component: InGame,
  parameters: {
    layout: "fullscreen",
  },
};

export const Player1Ready = {
  args: {
    playerRed: { label: "player 1", score: 0, animation: "idle" },
    playerYellow: { label: "player 2", score: 0, animation: "idle" },
    currentPlayer: "red",
    active: false,
  },
};

export const Player2ready = {
  args: {
    playerRed: {
      "label": "player 1",
      "score": 0,
      "animation": "idle"
    },
    playerYellow:{
      "label": "player 2",
      "score": 0,
      "animation": "idle"
    },
    currentPlayer:"yellow",
    active: false
  }
};
