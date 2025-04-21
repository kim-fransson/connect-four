import { action } from "@storybook/addon-actions";
import { BaseButton } from "./BaseButton";
import { Check } from "lucide-react";

export default {
  component: BaseButton,
  parameters: {
    layout: "centered",
  },
  args: {
    onPress: action("onPress"),
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["icon", "primary", "secondary"],
    },
    color: {
      control: { type: "select" },
      options: ["red", "yellow", "white"],
    },
    textAlign: {
      control: { type: "select" },
      options: ["center", "left"],
    },
  },
};

export const Icon = {
  args: {
    variant: "icon",
    children: <Check />,
  },
};

export const Primary = {
  args: {
    variant: "primary",
    children: "primary",
  },
};

export const PrimaryWhite = {
  args: {
    variant: "primary",
    children: "primary white",
    color: "white",
  },
};

export const PrimaryYellow = {
  args: {
    variant: "primary",
    children: "primary yellow",
    color: "yellow",
  },
};

export const Subtle = {
  parameters: {
    backgrounds: {
      default: "White",
    },
  },
  args: {
    variant: "subtle",
    children: "subtle",
  },
};

export const TextLeft = {
  args: {
    variant: "primary",
    children: "game rules",
    color: "white",
    textAlign: "left",
  },
  decorators: [
    // eslint-disable-next-line no-unused-vars
    (Story) => (
      <div style={{ width: "400px", display: "grid" }}>
        <Story />
      </div>
    ),
  ],
};
