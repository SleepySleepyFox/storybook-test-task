import type {Meta, StoryObj} from "@storybook/react-vite"
import SidebarMenu from "./SidebarMenu"

const meta: Meta<typeof SidebarMenu> = {
    title: "SidebarMenu",
    component: SidebarMenu,
}

export default meta

type Story = StoryObj<typeof SidebarMenu>

export const Default: Story = {
    args: {
        children: (
            <div>
              <p>This is the sidebar content!</p>
              <button>Click me</button>
            </div>
          ),
        
    },
};