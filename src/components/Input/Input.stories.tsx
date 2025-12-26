import type {Meta, StoryObj} from "@storybook/react-vite"
import Input from "./Input"

const meta: Meta<typeof Input> = {
    title: "Input",
    component: Input,
    argTypes: {
        type: {
          control: { type: "radio" }, 
          options: ["text", "password", "number"], 
        },
        placeholder: { control: "text" },
        clearable: { control: "boolean" },
      },
}

export default meta

type Story = StoryObj<typeof Input>


export const Default: Story = {
    args: {
        placeholder: "Write smth...",
        clearable: true,
        type: "text"
    },
};
export const Password: Story = {
    args: {
        placeholder: "Password",
        clearable: false,
        type: "password"
    },
  };

  export const Number: Story = {
    args: {
        placeholder: "Password",
        clearable: false,
        type: "number"
    },
  };