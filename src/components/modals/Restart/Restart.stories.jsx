import { Restart } from "./Restart";

export default {
  component: Restart,
  parameters: {
    layout: "centered",
  },
};

export const Primary = {
  parameters: {
    backgrounds: {
      default: "White",
    },
  },
  args: {},
};

export const Subtle = {
  parameters: {
    backgrounds: {
      default: "White",
    },
  },
  args: {
    btnVariant: "subtle",
  },
};
