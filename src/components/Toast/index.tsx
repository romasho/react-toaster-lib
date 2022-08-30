import React from 'react'

import { CloseIcon } from '@/components/CloseIcon'
import { Icon } from '@/components/Icon'
import { IToastProps } from '@/Types'

import {
  Message,
  ToastWrapper,
  Description,
} from './components'

export function Toast({
  type,
  message,
  fontSize = 32,
  description,
  margin = 16,
  position = 'bottom-left',
}: IToastProps) {
  return (
    <ToastWrapper
      type={type}
      margin={margin}
      fontSize={fontSize}
      position={position}
    >
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
