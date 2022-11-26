import styled, {css} from 'styled-components';

export const Button = styled.div<ButtonProps>`
  flex: 1;
  gap: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;

  border-radius: 6px;

  ${(props) => props?.variant === 'primary' ?
          css`
            color: ${props => props.theme.default.pallet['base-text']};;
            background: ${props => props.theme.default.pallet['base-button']};

            &:hover {
              background: ${props => props.theme.default.pallet['base-hover']};
            }
          `
          :
          css`
            text-align: center;
            justify-content: center;
            font-weight: 700;
            color: ${props => props.theme.default.pallet['white']};;
            background: ${props => props.theme.default.pallet['yellow']};

            &:hover {
              opacity: 0.9;
            }
          `
  }
  svg {
    color: ${props => props.theme.default.pallet['purple-dark']};;
  }

  span {
    font-size: ${props => props.theme.default.text.font.size.xsmall};
    text-transform: uppercase;
  }

  ${(props) => props?.size === 'small' ?
          css`
            padding: 0.5rem;
          `
          :
          css`
            padding: 1rem;
          `
  }

  ${(props) => props?.active ?
          css`
            border: 1px solid ${props => props.theme.default.pallet['purple-dark']};
            background: ${props => props.theme.default.pallet['purple-light']};

            &:hover {
              background: ${props => props.theme.default.pallet['purple-light']};
            }
          `
          :
          null

  }
`

interface ButtonProps {
  active?: boolean
  size?: 'small' | 'medium'
  variant?: 'primary' | 'secondary'
}
