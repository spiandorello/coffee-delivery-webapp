import { Button as BaseButton } from './styles'

interface ButtonProps {
  icon?: any
  label: string
  active?: boolean
  size?: 'small' | 'medium'
  onClick: () => void
  variant?: 'primary' | 'secondary'
}

export function Button(props: ButtonProps) {
  const { label, icon, variant = 'primary' } = props

  return (
    <BaseButton variant={variant} {...props}>
      {icon}
      <span>{label}</span>
    </BaseButton>
  )
}
