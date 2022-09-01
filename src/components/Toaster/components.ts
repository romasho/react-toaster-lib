import styled from 'styled-components'

import { ToastPosition } from '@/types'

type ToasterWrapperType = {
  position: ToastPosition,
  margin: number,
}

export const ToasterWrapper =
  styled.div <
  ToasterWrapperType >
  `
  position: absolute;
  overflow: hidden;
  ${(props) => {
    if (props.position === 'bottom-right') {
      return `bottom:  ${props.margin}px;
  right: ${props.margin}px;`
    }
    if (props.position === 'bottom-left') {
      return `bottom:  ${props.margin}px;
  left: ${props.margin}px;`
    }
    if (props.position === 'top-right') {
      return `top:  ${props.margin}px;
  right: ${props.margin}px;`
    }
    if (props.position === 'top-left') {
      return `top:  ${props.margin}px;
  left: ${props.margin}px;`
    }
  }}

`
