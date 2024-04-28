import type { Meta, StoryObj } from "@storybook/react";
import Project, { ProjectProps } from "./index";

export default {
  title: "Project",
  component: Project,
  args: {
    type: "E-commerce",
    name: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum facilisis dolor, ac consectetur dui volutpat eget.",
    github: " ",
    link: " ",
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
} satisfies Meta<ProjectProps>;

export const project: StoryObj<ProjectProps> = {};
