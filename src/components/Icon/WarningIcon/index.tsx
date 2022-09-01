import React from 'react'

import { IconProps } from '@/types'

export function WarningIcon({ fontSize = 32 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={fontSize * 2}
      height={fontSize * 2}
      viewBox="0 0 64 64"
    >
      <g transform="translate(0 -20.882)">
        <g transform="translate(0 20.882)">
          <path
            d="M221.823,333.382a3.6,3.6,0,0,0,0,7.2,3.6,3.6,0,0,0,0-7.2Z"
            transform="translate(-189.82 -288.408)"
          />
          <path
            d="M62.442,78.607a13.288,13.288,0,0,0,.026-12.434l-20.6-39.03a10.891,10.891,0,0,0-19.708-.014L1.529,66.2a13.4,13.4,0,0,0,.039,12.506A11.117,11.117,0,0,0,11.4,84.882H52.549A11.2,11.2,0,0,0,62.442,78.607Zm-4.473-2.821a6.142,6.142,0,0,1-5.433,3.44H11.383a6.054,6.054,0,0,1-5.368-3.368A7.366,7.366,0,0,1,6,68.993L26.631,29.934a5.944,5.944,0,0,1,10.762.014L58.009,69.008A7.268,7.268,0,0,1,57.969,75.786Z"
            transform="translate(0 -20.882)"
          />
          <path
            d="M220.5,157.278a3.913,3.913,0,0,0-2.778,3.929c.086,1.137.158,2.288.245,3.425.245,4.332.489,8.577.734,12.909a2.636,2.636,0,0,0,2.691,2.533,2.691,2.691,0,0,0,2.691-2.619c0-.892,0-1.713.086-2.619.158-2.778.331-5.555.489-8.333.086-1.8.245-3.6.331-5.4a4.444,4.444,0,0,0-.331-1.8A3.607,3.607,0,0,0,220.5,157.278Z"
            transform="translate(-189.392 -137.561)"
          />
        </g>
      </g>
    </svg>
  )
}