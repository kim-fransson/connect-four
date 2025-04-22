import { action } from "@storybook/addon-actions";
import { GameCard } from "./GameCard";

export default {
  component: GameCard,
  args: {
    onButtonPress: action("onButtonPress"),
  },
};

export const Default = {
  args: {
    label: "label",
    text: "text",
    buttonLabel: "button",
  },
};

export const Player1Wins = {
  args: {
    label: "player 1",
    text: "wins",
    buttonLabel: "play again"
  }
};

export const Player2Wins = {
  args: {
    label: "player 2",
    text: "wins",
    buttonLabel: "play again"
  }
};

export const StartGame = {
  args: {
    label: "Player 1",
    text: "Ready?",
    buttonLabel: "start"
  }
};
