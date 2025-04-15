import { CheckButton } from "./CheckButton";
import { action } from "@storybook/addon-actions";

export default {
  component: CheckButton,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    onPress: action("onPress"),
  },
};
