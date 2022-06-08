import SessionController from "../components/SessionController";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: 'Example/SessionController',
  component: SessionController,
  argTypes: {
    onLogout: {
      action: 'logout'
    }
  }
} as ComponentMeta<typeof SessionController>

const Template: ComponentStory<typeof SessionController> = (args) => (
  <div>
    <SessionController {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  name: 'Marcelo Martins',
  description: 'editor há muito tempo'
}
