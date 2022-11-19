import styled, { css } from 'styled-components'

interface CheckoutCartProps {
  quantity: number
}

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
`

export const Logo = styled.img`
  height: 40px;
`

export const LocationBadge = styled.span`
  padding: 0.5rem;
  border-radius: 6px;
  gap: 0.5rem;
  display: flex;
  align-items: center;

  color: ${(props) => props.theme.default.pallet['purple-dark']};
  background: ${(props) => props.theme.default.pallet['purple-light']};
`

export const CheckoutCart = styled.div<CheckoutCartProps>`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme.default.pallet['yellow-light']};
  color: ${(props) => props.theme.default.pallet['yellow-dark']};
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }

  &:before {
    ${(props) =>
      props.quantity
        ? css`
            content: '${props.quantity}';
          `
        : null};

    position: absolute;
    top: -0.7rem;
    right: -0.7rem;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: ${(props) => props.theme.default.pallet['yellow-dark']};
    color: ${(props) => props.theme.default.pallet.white};
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.1rem;
  }
`
