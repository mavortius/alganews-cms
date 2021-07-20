import { ComponentMeta, ComponentStory } from "@storybook/react";
import Input from "../components/Input/Input";

export default {
  title: 'Example/Input',
  component: Input/*,
  argTypes: {
    backgroundColor: { control: 'color' },
  },*/
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const WithPlaceholder = Template.bind({})
WithPlaceholder.args = {
  placeholder: 'e.g.: John Doe'
}

export const WithLabelAndPlaceholder = Template.bind({})
WithLabelAndPlaceholder.args = {
  label: 'Name:',
  placeholder: 'e.g.: John Doe'
}

export const WithLabelAndContent = Template.bind({})
WithLabelAndContent.args = {
  label: 'Name:',
  value: 'John Doe'
}

export const WithContent = Template.bind({})
WithContent.args = {
  value: 'John Doe'
}
