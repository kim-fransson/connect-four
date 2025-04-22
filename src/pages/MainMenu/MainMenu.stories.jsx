import { MainMenu } from "./MainMenu";
import { action } from "@storybook/addon-actions";

export default {
  component: MainMenu,
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = {
  args: {
    onPlayerVsPlayer: action("onPlayerVsPlayer"),
  },
};
