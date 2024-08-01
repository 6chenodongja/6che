import { ButtonIconButtons } from ".";

export default {
  title: "Components/ButtonIconButtons",
  component: ButtonIconButtons,
  argTypes: {
    variant: {
      options: ["primary", "neutral", "subtle"],
      control: { type: "select" },
    },
    stateProp: {
      options: ["disabled", "pressed", "hover", "default"],
      control: { type: "select" },
    },
    type: {
      options: ["rectangle", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    variant: "primary",
    stateProp: "disabled",
    type: "rectangle",
    className: {},
    iconFrameSize: "twenty-four",
    iconFrameSizeClassName: {},
  },
};
