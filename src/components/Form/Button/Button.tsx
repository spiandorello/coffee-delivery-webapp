import * as React from 'react'
import { Button as BaseButton } from './styles'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: any
  label: string
  active?: boolean
  size?: 'small' | 'medium'
  variant?: 'primary' | 'secondary'
}

export function Button(props: ButtonProps) {
  const { label, icon, variant = 'primary', disabled = false } = props

  return (
    <BaseButton variant={variant} disabled={disabled} {...props}>
      {icon}
      <span>{label}</span>
    </BaseButton>
  )
}
