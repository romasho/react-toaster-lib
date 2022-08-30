import React from 'react'

import { CloseIcon } from '@/components/CloseIcon'
import { Icon } from '@/components/Icon'

import {
  Message,
  ToastWrapper,
  ToastWrapType,
} from './components'

interface test {
  message: string;
}

export function Toast({
  type,
  message,
  fontSize,
}: ToastWrapType & test) {
  return (
    <ToastWrapper type={type}>
      <Icon type={type} fontSize={fontSize} />
      <Message fontSize={fontSize}>{message}</Message>
      <CloseIcon fontSize={fontSize} />
    </ToastWrapper>
  )
}
