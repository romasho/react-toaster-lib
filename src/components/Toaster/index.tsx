import React from 'react'

import { Portal } from '../Portal'
import { ToasterContainer } from '../ToasterContainer/ToasterWrapper'
import { ErrorBoundary } from '../ErrorBoundary'

import { ToastPosition, ToasterType } from '@/types'

export function Toaster({
  position = ToastPosition.bottomLeft,
  margin = 16,
}: ToasterType) {
  return (
    <Portal>
      <ErrorBoundary>
        <ToasterContainer
          position={position}
          margin={margin}
        />
      </ErrorBoundary>
    </Portal>
  )
}
