import * as React from 'react'
import { PaymentMethodInput as PaymentMethodInputBase } from './styles'

interface PaymentMethodInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: any
  label: string
  active?: boolean
  variant?: 'primary' | 'secondary'
}

export function PaymentMethodInput(props: PaymentMethodInputProps) {
  const { label, icon, variant = 'primary', active = false } = props

  return (
    <PaymentMethodInputBase active={active} variant={variant} {...props}>
      {icon}
      <span>{label}</span>
    </PaymentMethodInputBase>
  )
}
