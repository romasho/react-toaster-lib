import React from 'react'

import { useToast } from '@/hooks/useToast'
import { ToastPosition, ToasterType } from '@/types'

import { ToasterWrapper } from './Toaster/components'
import { Toast } from './Toast'

export function ToasterContainer({
  position = ToastPosition.bottomLeft,
  margin = 16,
}: ToasterType) {
  const toastList = useToast()

  return (
    <div>
      <ToasterWrapper position={position} margin={margin}>
        {toastList.map((toast, index) => (
          <Toast {...toast} key={toast.id} id={index} />
        ))}
      </ToasterWrapper>
    </div>
  )
}
