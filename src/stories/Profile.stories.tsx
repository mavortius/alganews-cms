import { ComponentMeta, ComponentStory } from "@storybook/react";
import Profile from "../components/Profile";

export default {
  title: 'Example/Profile',
  component: Profile
} as ComponentMeta<typeof Profile>

const Template: ComponentStory<typeof Profile> = (args) => <Profile {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'Marcelo Martins',
  description: 'editor há muito tempo'
}
