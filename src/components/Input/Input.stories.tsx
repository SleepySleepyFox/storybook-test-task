import type {Meta, StoryObj} from "@storybook/react-vite"
import Input from "./Input"

const meta: Meta<typeof Input> = {
    title: "Input",
    component: Input
}

export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
    args: {
      placeholder: "Input"
    },
  };

  export const Password: Story = {
    args: {
      placeholder: "Password"
    },
  };