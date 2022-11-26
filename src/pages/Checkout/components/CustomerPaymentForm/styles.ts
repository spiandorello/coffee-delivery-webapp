import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const RecipeAddress = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1rem 0.5rem;
  padding: 2rem;

  border-radius: 6px;
  background: ${props => props.theme.default.pallet['base-card']};
`

export const RecipeAddressHeader = styled.div`
  grid-column: 1 / 13;
  
  display: flex;
  gap: 0.5rem;
  
  span {
    svg {
      color: ${props => props.theme.default.pallet['yellow-dark']};
    }
  }
  
  span + span {
    color: blue;
    
    h2 {
      color: ${props => props.theme.default.pallet['base-subtitle']};
      font-size: ${props => props.theme.default.text.font.size.medium};
      font-weight: 400;
    }
    
    p {
      margin-top: 0.5rem;
      color: ${props => props.theme.default.pallet['base-text']};
      font-size: ${props => props.theme.default.text.font.size.small};
    }
  }
`
export const FormGroupCep = styled.div`
  grid-column: 1 / 5;
`
export const FormGroupStreet = styled.div`
  grid-column: 1 / 13;
`

export const FormGroupNumber = styled.div`
  grid-column: 1 / 5;
`

export const FormGroupComplement = styled.div`
  grid-column: 5 / 13;
`

export const FormGroupNeighbourhood = styled.div`
  grid-column: 1 / 5;
`

export const FormGroupCity = styled.div`
  grid-column: 5 / 12;
`

export const FormGroupState = styled.div`
  grid-column: 12 / 13;
`


export const PaymentMethodsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 1rem;
  padding: 2rem;

  border-radius: 6px;
  background: ${props => props.theme.default.pallet['base-card']};
`


export const PaymentMethodsHeader = styled.div`
  grid-column: 1 / 13;
  
  display: flex;
  gap: 0.5rem;

  svg {
    color: ${props => props.theme.default.pallet['purple-dark']};
  }
  
  span {
    h2 {
      color: ${props => props.theme.default.pallet['base-subtitle']};
      font-size: ${props => props.theme.default.text.font.size.medium};
      font-weight: 400;
    }
    
    p {
      margin-top: 0.5rem;
      color: ${props => props.theme.default.pallet['base-text']};
      font-size: ${props => props.theme.default.text.font.size.small};
    }
  }
`
export const PaymentMethods = styled.div`
  display: flex;
  gap: 0.8rem;
`