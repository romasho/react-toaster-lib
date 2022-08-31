import React from 'react'

import { Portal } from '../Portal'
import { Toast } from '../Toast'

import { useToast } from '@/hooks/useToast'

export function Toaster() {
  const toastList = useToast()

  return (
    <Portal>
      {toastList.map((toast) => (
        <Toast {...toast} key={toast.message} />
      ))}
    </Portal>
  )
}
