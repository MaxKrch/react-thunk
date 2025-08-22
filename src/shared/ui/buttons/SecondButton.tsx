import { memo } from 'react'
import type { ButtonProps } from './types'

const SecondButton = ({
  title,
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) => {
  let classes = `text-blue-800 border border-blue px-4 py-1 rounded uppercase font-semibold`

  disabled
    ? (classes += ` bg-gray-200`)
    : (classes += ` bg-white hover:bg-gray-100 cursor-pointer`)

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

export default memo(SecondButton)
