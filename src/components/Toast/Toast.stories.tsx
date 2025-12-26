import type {Meta, StoryObj} from "@storybook/react-vite"
import Toast from "./Toast"

const meta: Meta<typeof Toast> = {
    title: "Toast",
    component: Toast
}

export default meta

type Story = StoryObj<typeof Toast>

export const Default: Story = {
    args: {
      displayedText: "Text in Toast",
      type: "success"
    },
  };

export const Info: Story = {
  args: {
    displayedText: "Text in Toast",
    type: "informational"
  },
};

export const Warning: Story = {
  args: {
    displayedText: "Text in Toast",
    type: "warning"
  },
};

export const Error: Story = {
  args: {
    displayedText: "Text in Toast",
    subtext: "Error in ...",
    type: "error"
  },
};