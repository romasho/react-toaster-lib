import React from 'react'

import { Portal } from '../Portal'
import { ToasterContainer } from '../ToaserWrapper'

import { ToastPosition, ToasterType } from '@/types'

export function Toaster({
  position = ToastPosition.bottomLeft,
  margin = 16,
}: ToasterType) {
  return (
    <Portal>
      <ToasterContainer
        position={position}
        margin={margin}
      />
    </Portal>
  )
}
