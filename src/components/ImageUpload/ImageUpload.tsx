import { ChangeEvent, useState } from "react";
import Icon from "@mdi/react";
import { mdiUpload } from "@mdi/js";
import * as IU from './ImageUpload.styles'
import Button from "../Button/Button";

export type ImageUploadProps = {
  label: string
}

function ImageUpload(props: ImageUploadProps) {
  const [filePreview, setFilePreview] = useState<string | null>(null)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files![0]

    if (file) {
      const reader = new FileReader()

      reader.addEventListener('load', e => {
        setFilePreview(String(e.target?.result))
      })

      reader.readAsDataURL(file)
    }
  }

  if (filePreview) {
    return (
      <IU.ImagePreviewWrapper>
        <IU.ImagePreview preview={filePreview}>
          <Button variant={'primary'} label={'Remover imagem'} onClick={() => setFilePreview(null)} />
        </IU.ImagePreview>
      </IU.ImagePreviewWrapper>
    )
  }

  return (
    <IU.Wrapper>
      <IU.Label>
        <Icon path={mdiUpload} size={'24px'} />
        {props.label}
        <IU.Input type="file" onChange={handleChange} />
      </IU.Label>
    </IU.Wrapper>
  )
}

export default ImageUpload
