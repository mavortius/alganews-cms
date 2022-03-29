import { ComponentMeta, ComponentStory } from "@storybook/react";
import Confirm from "../components/Confirm/Confirm";

export default {
  title: 'Example/Confirm',
  component: Confirm
} as ComponentMeta<typeof Confirm>;

const Template: ComponentStory<typeof Confirm> = (args) => <Confirm {...args} />;

export const Default = Template.bind({})
Default.args = {
  title: 'Post não encontrado'
}
