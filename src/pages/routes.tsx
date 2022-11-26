import React from 'react'

import { Presentation } from '../templates'

import { Home, Checkout } from './index'

interface RouteInterface {
  path: string
  element: () => any
}

function addElementWrapper(
  Wrapper: any,
  { element: Screen, ...props }: RouteInterface,
) {
  return {
    ...props,
    element: () => (
      <Wrapper>
        <Screen />
      </Wrapper>
    ),
  }
}

export const routes = [
  [
    {
      path: '/',
      element: Home,
    },
    {
      path: '/checkout',
      element: Checkout,
    },
  ].map((route) => addElementWrapper(Presentation, route)),
].flat()
