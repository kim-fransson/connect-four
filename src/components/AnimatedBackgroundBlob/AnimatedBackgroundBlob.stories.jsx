import { AnimatedBackgroundBlob } from "./AnimatedBackgroundBlob";

export default {
  component: AnimatedBackgroundBlob,
  argTypes: {
    color: {
      control: { type: "select" },
      options: ["red", "yellow", "purple"],
    },
    animation: {
      control: { type: "select" },
      options: ["hidden", "show"],
    },
  },
  args: {
    animation: "hidden",
  },
  parameters: {
    layout: "fullscreen",
  },
};

export const Purple = {
  args: {
    color: "purple",
    animation: "show"
  },
};

export const Red = {
  args: {
    animation: "show",
    color: "red"
  }
};

export const Yellow = {
  args: {
    animation: "show",
    color: "yellow"
  }
};
