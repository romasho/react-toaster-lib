import { keyframes } from 'styled-components'

const font = 'Helvetica Neue, sans-serif'

const black = '#000000'
const white = '#ffffff'
const error = '#E25837'
const success = '#37E29A'
const warning = '#F4E048'
const info = '#9A40D3'

const boxShadow = 'box-shadow: 4px 4px 8px #00000029;'

const startX = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`
const startNegativeX = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const startY = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const startNegativeY = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const theme = {
  boxShadow,
  font,
  animations: {
    startX,
    startY,
    startNegativeY,
    startNegativeX,
  },
  colors: {
    black,
    white,
    error,
    warning,
    info,
    success,
  },
}

export default theme
