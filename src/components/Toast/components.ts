import styled from 'styled-components'

import theme from '@/theme'
import { MessagePropsType, ToastWrapType } from '@/Types'

export const ToastWrapper =
  styled.div <
  ToastWrapType >
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
  margin: ${(props) => props.margin}px;
  width: 660px;
  height: 180px;
  bottom: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 24px;
  padding: ${(props) => props.fontSize}px;
  background-color: ${(props) => theme.colors[props.type]};
  color: ${(props) =>
    props.type === 'warning'
      ? theme.colors.black
      : theme.colors.white};
  svg {
    fill: ${(props) =>
      props.type === 'warning'
        ? theme.colors.black
        : theme.colors.white};;
  }
  animation: ${theme.animations.startY} 1s;
`

export const Message =
  styled.h3 <
  MessagePropsType >
  `
  margin: 0;
  font-size: ${(props) => props.fontSize}px;
  font-family: ${theme.font};
  font-weight: 500;
  padding: 0px ${(props) => props.fontSize}px;
`

export const Description =
  styled.h4 <
  MessagePropsType >
  `
  margin: 0;
  font-size: ${(props) => props.fontSize * 0.75}px;
  font-family: ${theme.font};
  font-weight: 500;
  padding: 0px ${(props) => props.fontSize}px;
  padding-top: ${(props) => props.fontSize}px;
`
