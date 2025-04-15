import { action } from "@storybook/addon-actions";
import { PrimaryButton } from "./PrimaryButton";

export default {
  component: PrimaryButton,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  args: {
    onPress: action("onPress"),
    children: "Primary Button",
  },
};
