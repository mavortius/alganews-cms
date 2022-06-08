import { Tag, WithContext as ReactTagInput } from "react-tag-input"
import * as TI from './TagInput.styles'

type TagInputProps = {
  onAdd: (tag: Tag) => any,
  onDelete: (id: number) => any,
  tags: Tag[],
  placeholder: string
}

const KeyCodes = {
  comma: 188,
  enter: 13,
  tab: 9
}

function TagInput(props: TagInputProps) {
  return (
    <TI.Wrapper>
      <ReactTagInput
        placeholder={props.placeholder}
        tags={props.tags}
        allowDragDrop={false}
        autofocus={false}
        delimiters={[KeyCodes.comma, KeyCodes.enter, KeyCodes.tab]}
        handleAddition={props.onAdd}
        handleDelete={props.onDelete} />
    </TI.Wrapper>
  )
}

export default TagInput
