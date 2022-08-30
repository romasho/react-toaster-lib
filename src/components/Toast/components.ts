import styled from 'styled-components'

import theme from '@/theme'

export type ToastType =
  | 'info'
  | 'warning'
  | 'error'
  | 'success'

export interface ToastWrapType {
  type: ToastType;
  fontSize?: number;
  animation?: string;
  delay?: number;
}

export interface MessagePropsType {
  fontSize?: number;
}

export const ToastWrapper =
  styled.div <
  ToastWrapType >
  `
  width: 660px;
  height: 180px;
  bottom: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 24px;
  position: relative;
  padding: ${(props) =>
    props.fontSize ? props.fontSize : 32}px;
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
  font-size: ${(props) =>
    props.fontSize ? props.fontSize : 32}px;
  font-family: ${theme.font};
  font-weight: 500;
  padding: ${(props) =>
    props.fontSize ? props.fontSize : 32}px;
`
