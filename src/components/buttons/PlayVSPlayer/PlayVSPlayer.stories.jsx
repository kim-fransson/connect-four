import { action } from "@storybook/addon-actions";
import { PlayVSPlayer } from "./PlayVSPlayer";

export default {
  component: PlayVSPlayer,
  parameters: {
    layout: "centered",
  },
  args: {
    onPress: action("onPress"),
  },
};

export const Default = {
  args: {},
};
