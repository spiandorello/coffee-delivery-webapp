import * as React from 'react'

import { Container } from './styles'

interface InputNumberProps extends React.InputHTMLAttributes<HTMLInputElement> {
  callback?: (value: number) => void
}

export function InputNumber(props: InputNumberProps) {
  return (
    <Container
      type="number"
      {...props}
      onChange={(event) => {
        if (props?.callback) {
          return props.callback(Number(event.target.value))
        }
      }}
    />
  )
}
