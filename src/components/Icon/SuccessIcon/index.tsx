import React from 'react'

import { IconProps } from '@/types'

export function SuccessIcon({ fontSize = 32 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={fontSize * 2}
      height={fontSize * 2}
      viewBox="0 0 64 64"
    >
      <path d="M32,0A32,32,0,1,0,64,32,32.036,32.036,0,0,0,32,0Zm0,61.538A29.538,29.538,0,1,1,61.538,32,29.573,29.573,0,0,1,32,61.538Z" />
      <path
        d="M49.5,15.336,27.547,32.626,14.32,25.219a1.873,1.873,0,0,0-2.007.156.817.817,0,0,0,.223,1.406l14.286,8a1.846,1.846,0,0,0,.893.219,1.748,1.748,0,0,0,1.069-.336l22.857-18a.809.809,0,0,0-.119-1.411A1.882,1.882,0,0,0,49.5,15.336Z"
        transform="translate(0 5.625)"
      />
    </svg>
  )
}