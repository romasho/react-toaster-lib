import styled from 'styled-components'

import theme from '@/theme'
import { AnimationType, MessagePropsType, ToastType, ToastWrapType } from '@/types'

export const ToastWrapper =
  styled.div <
  ToastWrapType >
  `
  position: relative;
  z-index: 9;
  box-sizing: border-box;
  overflow: hidden;
  margin: ${(props) => props.margin}px;
  width: ${(props) => props.width || 660}px;
  height: ${(props) => props.height || 180}px;
  bottom: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 24px;
  padding: ${(props) => props.fontSize}px;
  background-color: ${(props) => theme.colors[props.type as ToastType]};
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
  animation: ${(props) => theme.animations[props.animation as AnimationType]} 1s;
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
