import { ButtonIconButton } from ".";

export default {
  title: "Components/ButtonIconButton",
  component: ButtonIconButton,
  argTypes: {
    size: {
      options: ["large", "medium", "small"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "large",
    className: {},
    buttonIconButtonsVariantPrimaryClassName: {},
  },
};
