import type { Meta, StoryObj } from "@storybook/react";
import Selector, { SelectorProps } from "./index";

export default {
  title: "Selector",
  component: Selector,
  args: {
    active: true,
    icon: "calendar",
    title: "Lorem ipsum",
    subtitle: "Dolor sit amet",
  },
  decorators: [
    (Story) => {
      return (
        <div className="flex w-full p-6 bg-[var(--dark)]">
          <Story />
        </div>
      );
    },
  ],
} satisfies Meta<SelectorProps>;

export const selector: StoryObj<SelectorProps> = {};
