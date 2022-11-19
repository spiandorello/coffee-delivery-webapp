import * as React from 'react'

import { Header } from '../../components'

import { PresentationContainer } from './styles'

interface PresentationInterface {
  children: React.ReactNode
}

export function Presentation({ children }: PresentationInterface) {
  return (
    <PresentationContainer>
      <Header />
      {children}
    </PresentationContainer>
  )
}
