import styled from 'styled-components';

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
`;

export const CoffeeCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.default.pallet['base-card']};
  padding: 1.25rem 1.5rem;
  border-radius: 6px 36px;
  gap: 1rem;
`;

export const CoffeeCardIcon = styled.img`
  height: 100px;
  margin-top: -4.25rem;
`;

export const CoffeeCarContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CoffeeCardTitle = styled.h3`
  font-size: ${props => props.theme.default.header.font.size.medium};
`;


export const CoffeeCardDescription = styled.div`
  font-size: ${props => props.theme.default.text.font.size.small};
  color: ${props => props.theme.default.pallet['base-label']};
`;

export const CoffeeCarActions  = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  align-items: center;
  grid-column-gap: 0.5rem;

  div {
    grid-column-start: 1;
    grid-column-end: 4;
  }
  
  input {
    grid-column-start: 4;
    grid-column-end: 6;
  }

  span {
    grid-column-start: 6;
    grid-column-end: 8;
  }
`;