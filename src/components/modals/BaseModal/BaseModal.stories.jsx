import { BaseButton } from "../../buttons";
import { BaseModal } from "./BaseModal";

export default {
  component: BaseModal,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: {
      control: { type: "select" },
      options: ["white", "purple"],
    },
  },
};

export const Purple = {
  parameters: {
    backgrounds: {
      default: "White",
    },
  },
  args: {
    color: "purple",
    heading: "Purple background",
    trigger: (
      <BaseButton variant="primary" color="yellow">
        Open Modal
      </BaseButton>
    ),
  },
};

export const White = {
  args: {
    color: "white",
    heading: "White background",
    trigger: (
      <BaseButton variant="primary" color="yellow">
        Open Modal
      </BaseButton>
    ),
  },
};
