import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 4rem;
`

export const CoffeeCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.default.pallet['base-card']};
  padding: 1.25rem 1.5rem;
  border-radius: 6px 36px;
  gap: 1rem;
`

export const CoffeeCardIcon = styled.img`
  height: 100px;
  margin-top: -4.25rem;
`

export const CoffeeCarContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;
`

export const CoffeeTags = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-self: center;
`

export const CoffeeTag = styled.p`
  padding: 0.25rem 0.5rem;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 0.75rem;
  text-transform: uppercase;

  border-radius: 1rem;
  background-color: ${(props) => props.theme.default.pallet['yellow-light']};
  color: ${(props) => props.theme.default.pallet['yellow-dark']};
`

export const CoffeeCardTitle = styled.h3`
  font-size: ${(props) => props.theme.default.header.font.size.medium};
`

export const CoffeeCardDescription = styled.div`
  font-size: ${(props) => props.theme.default.text.font.size.small};
  color: ${(props) => props.theme.default.pallet['base-label']};
`

export const CoffeeCarActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`

export const CoffeeCheckoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0.5rem;
  color: ${(props) => props.theme.default.pallet.white};
  background: ${(props) => props.theme.default.pallet['purple-dark']};
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.default.pallet.purple};
  }
`
