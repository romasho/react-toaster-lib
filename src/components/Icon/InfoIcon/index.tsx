import React from 'react'

import { IconProps } from '@/types'

export function InfoIcon({ fontSize = 32 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={fontSize * 2}
      height={fontSize * 2}
      viewBox="0 0 64 64"
    >
      <defs />
      <circle
        className="a"
        cx="3.442"
        cy="3.442"
        r="3.442"
        transform="translate(28.558 43.702)"
      />
      <path
        className="a"
        d="M32,0A32,32,0,1,0,64,32,31.983,31.983,0,0,0,32,0Zm0,59A27,27,0,1,1,59,32,26.985,26.985,0,0,1,32,59Z"
      />
      <path
        className="a"
        d="M187.016,128.5A11.028,11.028,0,0,0,176,139.516a2.754,2.754,0,0,0,5.508,0,5.508,5.508,0,1,1,5.508,5.508,2.754,2.754,0,0,0-2.754,2.754v6.885a2.754,2.754,0,0,0,5.508,0v-4.479a11.016,11.016,0,0,0-2.754-21.683Z"
        transform="translate(-155.016 -113.572)"
      />
    </svg>
  )
}