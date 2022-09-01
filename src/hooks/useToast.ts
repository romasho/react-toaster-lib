import { useState, useEffect } from 'react'

import { toastStore } from '@/toastStore'

export function useToast() {
  const [toastList, setToastList] = useState(
    toastStore.toastList,
  )

  useEffect(() => {
    const unsubscribe = toastStore.subscribe(
      'TOAST',
      setToastList,
    )
    return () => {
      unsubscribe()
    }
  }, [])

  return toastList
}
