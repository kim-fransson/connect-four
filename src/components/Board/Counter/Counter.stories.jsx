import { Counter } from "./Counter";

export default {
  component: Counter,
};

export const Red = {
  args: {
    color: "red",
  },
};

export const RedHighlight = {
  args: {
    color: "red",
    highlight: true,
  },
};

export const Yellow = {
  args: {
    color: "yellow",
  },
};

export const YellowHighlight = {
  args: {
    color: "yellow",
    highlight: true
  }
};
