import { useState, useEffect } from 'react'

import { IToastProps } from './../Types/index'

import { toastStore } from '@/toastStore'

export function useToast() {
  const [toastList, setToastList] = useState(
    toastStore.toastList,
  )

  useEffect(() => {
    function handleStatusChange(toasts: IToastProps[]) {
      setToastList(toasts)
    }
    const X = toastStore.subscribe(
      'TOAST',
      handleStatusChange,
    )
    return () => {
      X()
    }
  })

  return toastList
}
