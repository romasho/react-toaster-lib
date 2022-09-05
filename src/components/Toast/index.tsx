import React from 'react'

import { CloseIcon } from '@/components/Icon/CloseIcon'
import { Icon } from '@/components/Icon'
import {
  IToastProps,
  ToastType,
  AnimationType,
} from '@/types'
import { Id, toastStore } from '@/toastStore'

import {
  Message,
  ToastWrapper,
  Description,
} from './components'

export function Toast({
  type = ToastType.success,
  fontSize = 32,
  animation = AnimationType.startX,
  message,
  description,
  margin,
  id,
  width,
  height,
}: IToastProps & Id) {
  const deleteToast = () => {
    toastStore.removeToast(id)
  }

  return (
    <ToastWrapper
      type={type}
      margin={margin}
      fontSize={fontSize}
      animation={animation}
      width={width}
      height={height}
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
      <CloseIcon
        fontSize={fontSize}
        onClick={deleteToast}
      />
    </ToastWrapper>
  )
}
