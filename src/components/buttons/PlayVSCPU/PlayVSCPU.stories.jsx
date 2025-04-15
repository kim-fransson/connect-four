import { action } from "@storybook/addon-actions";
import { PlayVSCPU } from "./PlayVSCPU";

export default {
  component: PlayVSCPU,
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
