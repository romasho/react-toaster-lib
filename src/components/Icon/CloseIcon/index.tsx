import React from 'react'

import { IconProps } from '@/types'

import { Close } from './components'

export function CloseIcon({
  fontSize,
  onClick,
}: IconProps) {
  return (
    <Close onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={fontSize}
        height={fontSize}
        viewBox="0 0 32 32"
      >
        <defs />
        <g transform="translate(0 -0.001)">
          <path
            className="a"
            d="M18.83,16,31.414,3.417a2,2,0,0,0-2.83-2.83L16,13.172,3.416.587a2,2,0,0,0-2.83,2.83L13.171,16,.586,28.585a2,2,0,1,0,2.83,2.829L16,18.83,28.584,31.415a2,2,0,0,0,2.83-2.83Z"
          />
        </g>
      </svg>
    </Close>
  )
}
