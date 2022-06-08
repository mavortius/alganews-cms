import { ComponentMeta, ComponentStory } from "@storybook/react";
import TagInput from "../components/TagInput";
import { useState } from "react";
import { Tag } from "react-tag-input";

export default {
  title: 'Example/TagInput',
  component: TagInput
} as ComponentMeta<typeof TagInput>

const Template: ComponentStory<typeof TagInput> = (args) => (
  <div>
    <TagInput {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  tags: [{ id: '545668', text: 'Novo post' }],
  placeholder: 'Insira as tags deste post'
}

export const Various = Template.bind({})
Various.args = {
  tags: [
    { id: '545668', text: 'Novo post' },
    { id: '545668', text: 'Novo post' },
    { id: '545668', text: 'Novo post' },
    { id: '545668', text: 'Novo post' },
    { id: '545668', text: 'Novo post' },
    { id: '545668', text: 'Novo post' },
    { id: '545668', text: 'Novo post' }
  ],
  placeholder: 'Insira as tags deste post'
}

export function WorkingLiveExample() {
  const [tags, setTags] = useState<Tag[]>([])
  return <TagInput
    onAdd={tag => setTags([...tags, tag])}
    onDelete={index => setTags(tags.filter((tag, i) => i !== index))}
    tags={tags}
    placeholder="Insira as tags deste post" />
}
