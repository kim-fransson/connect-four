import { InGame } from "./InGame";

export default {
  component: InGame,
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = {
  args: {
    playerRed: { label: "player 1", score: 0, animation: "idle" },
    playerYellow: { label: "player 2", score: 0, animation: "idle" },
  },
};
