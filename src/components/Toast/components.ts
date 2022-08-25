import styled from 'styled-components'

import theme from '@/theme'

export type ToastWrapType = {
  color: string,
  animation: string,
  delay: number,
  margins?: string,
  backgroundColor?: string,
}

export const ToastWrapper =
  styled.div <
  ToastWrapType >
  `
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    fill: ${({ color }) => color};
  }
`
