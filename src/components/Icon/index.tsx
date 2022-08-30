import React from 'react'

import { InfoIcon } from '../InfoIcon'
import { ErrorIcon } from '../SearchIcon'
import { SuccessIcon } from '../SuccessIcon'
import { ToastType } from '../Toast/components'
import { WarningIcon } from '../WarningIcon'

interface IconProps {
  fontSize?: number;
  type: ToastType;
}

export function Icon({ fontSize, type }: IconProps) {
  return (
    <>
      {type === 'error' && (
        <ErrorIcon fontSize={fontSize} />
      )}
      {type === 'info' && <InfoIcon fontSize={fontSize} />}
      {type === 'warning' && (
        <WarningIcon fontSize={fontSize} />
      )}
      {type === 'success' && (
        <SuccessIcon fontSize={fontSize} />
      )}
    </>
  )
}
