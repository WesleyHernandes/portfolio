import type { Meta, StoryObj } from "@storybook/react";
import Section, { SectionProps } from "./index";

export default {
  title: "Section",
  component: Section,
  args: {
    position: "ONE",
  },
  argTypes: {
    position: {
      control: {
        type: "inline-radio",
      },
    },
  },
} satisfies Meta<SectionProps>;

export const One: StoryObj<SectionProps> = {
  args: {
    position: "ONE",
  },
};

export const Two: StoryObj<SectionProps> = {
  args: {
    position: "TWO",
  },
};

export const Three: StoryObj<SectionProps> = {
  args: {
    position: "TRHEE",
  },
};
