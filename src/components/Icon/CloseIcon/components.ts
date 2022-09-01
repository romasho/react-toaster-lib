import styled from 'styled-components'

export type CloseProps = {}

export const Close =
  styled.button <
  CloseProps >
  `
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  top: 32px;
  right: 32px;
  width: 32px;
  height: 32px;
`
