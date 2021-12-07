import { ComponentMeta, ComponentStory } from "@storybook/react";
import ValueDescriptor from "../components/ValueDescriptor/ValueDescriptor";

export default {
  title: 'Example/ValueDescriptor',
  component: ValueDescriptor
} as ComponentMeta<typeof ValueDescriptor>;

const Template: ComponentStory<typeof ValueDescriptor> = (args) => <ValueDescriptor {...args} />;

export const Default = Template.bind({})
Default.args = {
  description: 'Ganhos na semana',
  value: 560322.02
}

export const DefaultCurrency = Template.bind({})
DefaultCurrency.args = {
  description: 'Ganhos na semana',
  value: 560322.02,
  isCurrency: true,
  color: 'default'
}

export const Primary = Template.bind({})
Primary.args = {
  description: 'Ganhos na semana',
  value: 560322.02,
  isCurrency: false,
  color: 'primary'
}

export const PrimaryCurrency = Template.bind({})
PrimaryCurrency.args = {
  description: 'Ganhos na semana',
  value: 560322.02,
  isCurrency: true,
  color: 'primary'
}
