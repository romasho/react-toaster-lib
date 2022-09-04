import React from 'react'

import { useToast } from '@/hooks/useToast'
import { ToastPosition, ToastWrapType } from '@/types'

import { ToasterWrapper } from './Toaster/components'
import { Toast } from './Toast'

export function ToasterContainer({
  position = ToastPosition.bottomLeft,
  margin = 16,
  delay,
}: ToastWrapType) {
  const toastList = useToast()

  return (
    <div>
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
    </div>
  )
}
