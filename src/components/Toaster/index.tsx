import React from 'react'

import { Portal } from '../Portal'
import { ToasterContainer } from '../ToaserWrapper'

import { ToastPosition, ToastWrapType } from '@/types'

export function Toaster({
  position = ToastPosition.bottomLeft,
  margin = 16,
  delay,
}: ToastWrapType) {
  return (
    <Portal>
      <ToasterContainer
        position={position}
        margin={margin}
        delay={delay}
      />
    </Portal>
  )
}
