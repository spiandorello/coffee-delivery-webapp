import styled, { css } from 'styled-components'

interface ButtonProps {
  disabled: boolean
}

export const Button = styled.button<ButtonProps>`
  flex: 1;
  width: 100%;
  gap: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 6px;

  text-align: center;
  justify-content: center;
  font-weight: 700;
  color: ${(props) => props.theme.default.pallet.white};
  background: ${(props) => props.theme.default.pallet.yellow};
  
  &:hover {
    opacity: 0.9;
  }
  
  
  ${(props) => props.disabled && 
    css`
      opacity: 0.9;
      cursor: not-allowed;
    `
  }
  
  span {
    font-size: ${(props) => props.theme.default.text.font.size.xsmall};
    text-transform: uppercase;
  }
`
