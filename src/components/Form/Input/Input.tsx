import * as React from 'react'
import { useFormContext } from 'react-hook-form'

import { Input as BaseInput } from './styles'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
}

export function Input(props: InputProps) {
  const form = useFormContext()

  if (form) {
    return <BaseInput type="text" {...props} {...form.register(props.name)} />
  }

  return <BaseInput type="text" {...props} />
}
