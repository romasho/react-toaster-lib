import React from 'react'

import { Toast } from './'

export default {
  title: 'Toast',
}

export const Error = () => (
  <Toast type="error" message="Error toast example" />
)

export const Warning = () => (
  <Toast
    type="warning"
    message="Warning toast example"
    fontSize={34}
  />
)

export const Info = () => (
  <Toast type="info" message="Info toast example" />
)

export const Success = () => (
  <Toast type="success" message="Success toast example" />
)
