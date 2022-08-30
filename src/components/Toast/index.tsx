import React from 'react'

import { CloseIcon } from '@/components/CloseIcon'
import { Icon } from '@/components/Icon'

import {
  Message,
  ToastWrapper,
  ToastWrapType,
  Description,
} from './components'

interface test {
  message: string;
  description?: string;
}

export function Toast({
  type,
  message,
  fontSize,
  description,
}: ToastWrapType & test) {
  return (
    <ToastWrapper type={type}>
      <Icon type={type} fontSize={fontSize} />
      <div>
        <Message fontSize={fontSize}>{message}</Message>
        {description && (
          <Description fontSize={fontSize}>
            {description}
          </Description>
        )}
      </div>
      <CloseIcon fontSize={fontSize} />
    </ToastWrapper>
  )
}
