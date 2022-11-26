import * as React from 'react'

import { Container } from './styles'

interface InputNumberProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onValueChange?: (value: number) => void
}

export function InputNumber(props: InputNumberProps) {
  return (
    <Container
      type="number"
      {...props}
      onChange={(event) => {
        if (props.onValueChange) {
          return props.onValueChange(Number(event.target.value))
        }
      }}
    />
  )
}
