export type ButtonProps = {
  title: string
  type?: 'submit' | 'reset' | 'button'
  onClick?: () => void
  disabled?: boolean
}
