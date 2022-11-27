import styled, { css } from 'styled-components'
import * as React from 'react'

interface PaymentMethodInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  active?: boolean
  variant?: 'primary' | 'secondary'
}

export const PaymentMethodInput = styled.span<PaymentMethodInputProps>`
  flex: 1;
  width: 100%;
  gap: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid transparent;

  ${(props) =>
    props?.variant === 'primary'
      ? css`
          color: ${(props) => props.theme.default.pallet['base-text']};
          background: ${(props) => props.theme.default.pallet['base-button']};

          &:hover {
            background: ${(props) => props.theme.default.pallet['base-hover']};
          }
        `
      : css`
          text-align: center;
          justify-content: center;
          font-weight: 700;
          color: ${(props) => props.theme.default.pallet.white};
          background: ${(props) => props.theme.default.pallet.yellow};

          &:hover {
            opacity: 0.9;
          }
        `}
  svg {
    color: ${(props) => props.theme.default.pallet['purple-dark']};
  }

  span {
    font-size: ${(props) => props.theme.default.text.font.size.xsmall};
    text-transform: uppercase;
  }

  ${(props) =>
    props?.active
      ? css`
          border: 1px solid
            ${(props) => props.theme.default.pallet['purple-dark']};
          background: ${(props) => props.theme.default.pallet['purple-light']};

          &:hover {
            background: ${(props) =>
              props.theme.default.pallet['purple-light']};
          }
        `
      : null}
`
