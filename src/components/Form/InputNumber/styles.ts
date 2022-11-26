import styled from 'styled-components'

export const Container = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border: none;

  border-radius: 4px;
  background-color: ${(props) => props.theme.default.pallet['base-button']};
  color: ${(props) => props.theme.default.pallet['base-text']};
`
