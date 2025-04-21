import { AnimatedPlayer } from "./AnimatedPlayer";

export default {
  component: AnimatedPlayer,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    animation: {
      control: { type: "select" },
      options: ["idle", "follow", "win", "lose"],
    },
    color: {
      control: { type: "select" },
      options: ["red", "yellow"],
    },
  },
};

export const Player1 = {
  args: {
    color: "red",
    animation: "idle",
  },
};

export const Player2 = {
  args: {
    color: "yellow",
    animation: "idle",
  },
};

export const Follow = {
  args: {
    color: "red",
    animation: "follow"
  }
};

export const Win = {
  args: {
    color: "red",
    animation: "win"
  }
};

export const Lose = {
  args: {
    color: "red",
    animation: "lose"
  }
};
