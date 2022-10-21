import { Home } from './Home';
import { Presentation } from '../templates';
import React from 'react';

interface RouteInterface {
  path: string;
  element: () => JSX.Element,
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
  };
}

export const routes = [
  [
    {
      path: '/',
      element: Home,
    },
  ].map((route) => addElementWrapper(Presentation, route)),
].flat();