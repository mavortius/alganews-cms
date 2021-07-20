import * as B from './Button.styles'

export type ButtonProps = {
  variant: 'danger' | 'text' | 'primary',
  label: string
}

export default function Button({ variant }: ButtonProps) {
  return (
    <B.Wrapper variant={variant}>
      Button
    </B.Wrapper>
  )
}
