import { Timer } from "./Timer";
import { action } from "@storybook/addon-actions";

export default {
  component: Timer,
};

export const Player1 = {
  args: {
    label: "PLAYER 1’S TURN",
    from: 15,
    color: "red",
    onTimerEnd: action("on-timer-end"),
  },
};

export const Player2 = {
  args: {
    label: "PLAYER 2’S TURN",
    from: 15,
    color: "yellow",
    onTimerEnd: action("on-timer-end"),
  },
};
