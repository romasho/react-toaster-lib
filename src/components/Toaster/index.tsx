import React from 'react'

import { Portal } from '../Portal'
import { Toast } from '../Toast'

import ToastStore from '@/toastStore'

export function Toaster() {
  return (
    <Portal>
      {ToastStore.toastList?.map((toast) => (
        <Toast {...toast} key={toast.message} />
      ))}
    </Portal>
  )
}
