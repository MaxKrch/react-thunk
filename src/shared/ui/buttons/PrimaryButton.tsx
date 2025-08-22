import { memo } from 'react'
import type { ButtonProps } from './types'

const PrimaryButton = ({
  title,
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) => {

  let classes = `text-white px-4 py-1 rounded uppercase font-semibold`

  disabled
    ? (classes += ` bg-blue-400`)
    : (classes += ` bg-blue-600 hover:bg-blue-800 cursor-pointer`)

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {title}
    </button>
  )
}

export default memo(PrimaryButton)
