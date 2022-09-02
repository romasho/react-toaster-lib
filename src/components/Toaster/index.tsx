import React, { memo } from 'react'

import { Portal } from '../Portal'
import { Toast } from '../Toast'

import { useToast } from '@/hooks/useToast'
import { ToastPosition, ToastWrapType } from '@/types'

import { ToasterWrapper } from './components'

export const Toaster = memo(function Toaster({
  position = ToastPosition.bottomLeft,
  margin = 16,
  delay,
}: ToastWrapType) {
  const toastList = useToast()

  return (
    <Portal>
      <ToasterWrapper position={position} margin={margin}>
        {toastList.map((toast, index) => (
          <Toast
            {...toast}
            margin={margin}
            key={toast.id}
            delay={delay}
            id={index}
          />
        ))}
      </ToasterWrapper>
    </Portal>
  )
})
