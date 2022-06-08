import { ComponentMeta, ComponentStory } from "@storybook/react";
import WordPriceCounter from "../components/WodPriceCounter";

export default {
  title: 'Example/WordPriceCounter'
} as ComponentMeta<typeof WordPriceCounter>

const Template: ComponentStory<typeof WordPriceCounter> = (args) => (
  <div>
    <WordPriceCounter {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  pricePerWord: 0.25,
  wordsCount: 20
}
