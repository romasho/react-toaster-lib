import { useState, useEffect } from 'react'

import { IToastProps } from './../Types/index'

import ToastStore from '@/toastStore'

export function useToast() {
  const [toastList, setToastList] = useState(
    ToastStore.toastList,
  )

  useEffect(() => {
    function handleStatusChange(toasts: IToastProps[]) {
      setToastList(toasts)
    }
    // ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    // return () => {
    //   ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    // };
  })

  return toastList
}
