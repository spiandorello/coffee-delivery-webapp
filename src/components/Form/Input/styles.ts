import styled from 'styled-components'

export const Input = styled.input`
  height: 42px;
  background-color: ${(props) => props.theme.default.pallet['base-input']};
  border: 1px solid ${(props) => props.theme.default.pallet['base-button']};
  border-radius: 4px;
  width: 100%;
  padding: 0.8rem;
  color: ${(props) => props.theme.default.pallet['base-text']};

  &::placeholder {
    color: ${(props) => props.theme.default.pallet['base-label']};
  }

  &:active,
  &:focus {
    border: 1px solid ${(props) => props.theme.default.pallet['yellow-dark']};
  }

  &:disabled {
    opacity: 0.7;
  }
`
