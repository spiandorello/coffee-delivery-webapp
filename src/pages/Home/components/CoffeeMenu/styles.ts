import styled from 'styled-components';

export const CoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 2rem;
  
  h2 {
    font-size: ${({ theme }) => theme.default.header.font.size.large};
    color: ${({ theme }) => theme.default.pallet['base-subtitle']};
  }
`;

export const CoffeeList = styled.ul`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  list-style: none;
`

export const CoffeeListItem = styled.li`
  
`