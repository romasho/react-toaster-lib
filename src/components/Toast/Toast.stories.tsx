import React from 'react'

import { Toast } from './'

export default {
  title: 'Toast',
}

export const Error = () => (
  <Toast
    type="error"
    message="Error toast example"
    position="bottom-left"
  />
)

export const Warning = () => (
  <Toast
    type="warning"
    message="Warning toast example"
    description="404 Lorem iasdasd aldsalks"
    fontSize={34}
    position="bottom-right"
  />
)

export const Info = () => (
  <Toast
    type="info"
    message="Info toast example"
    position="top-right"
  />
)

export const Success = () => (
  <Toast type="success" message="Success toast example" />
)
