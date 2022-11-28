import React from 'react'

import { Presentation } from '../templates'

import { Home, Checkout, CheckoutReview } from './index'

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
    {
      path: '/checkout/review',
      element: CheckoutReview,
    },
  ].map((route) => addElementWrapper(Presentation, route)),
].flat()
