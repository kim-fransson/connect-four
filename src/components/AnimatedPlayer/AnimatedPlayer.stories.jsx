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
    follow: true,
    animation: "idle",
  },
};

export const Player2 = {
  args: {
    color: "yellow",
    follow: true,
    animation: "idle",
  },
};
