import { ScoreCard } from "./ScoreCard";

export default {
  component: ScoreCard,
  parameters: {
    layout: "centered",
  },
};

export const Player1 = {
  args: {
    label: "PLAYER 1",
    score: 12,
    color: "red",
    follow: true,
  },
};

export const Player2 = {
  args: {
    label: "PLAYER 2",
    score: 23,
    color: "yellow",
    follow: true,
  },
};
