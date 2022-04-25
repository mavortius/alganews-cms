import { ComponentMeta, ComponentStory } from "@storybook/react";
import Chart from "../components/Chart/Chart";

export default {
  title: 'Example/Chart',
  component: Chart
} as ComponentMeta<typeof Chart>;

const Template: ComponentStory<typeof Chart> = (args) => <Chart {...args} />;

export const Default = Template.bind({})
Default.args = {}
