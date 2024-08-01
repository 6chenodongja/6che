import { ButtonHeart } from ".";

export default {
  title: "Components/ButtonHeart",
  component: ButtonHeart,
  argTypes: {
    property1: {
      options: ["three", "one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "three",
    className: {},
  },
};
