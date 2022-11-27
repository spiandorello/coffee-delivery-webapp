import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > div {
    padding: 2rem 1rem;
    height: 100%;
    border-radius: 6px 44px;

    background: ${(props) => props.theme.default.pallet['base-card']};
  }
`

export const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`

export const CartItem = styled.li`
  position: relative;
  gap: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;

  &:after {
    content: '';
    bottom: 0;
    position: absolute;
    border-bottom: 1px solid
      ${(props) => props.theme.default.pallet['base-button']};
    width: 100%;
  }

  img {
    width: 64px;
  }

  span {
    display: flex;
    flex-direction: column;
  }
`

export const CartItemActions = styled.div`
  display: flex;
  margin-top: 0.5rem;
  gap: 0.5rem;
  align-items: center;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;

    svg {
      color: ${(props) => props.theme.default.pallet.purple};
    }

    padding: 0.5rem;
    font-size: ${(props) => props.theme.default.text.font.size.small};
    text-transform: uppercase;
    background: ${(props) => props.theme.default.pallet['base-button']};

    border: none;

    border-radius: 4px;
    background-color: ${(props) => props.theme.default.pallet['base-button']};
  }
`

export const CartPaymentInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin: 2rem 0;

  div {
    flex: 1;
    display: flex;
    justify-content: space-between;
  }
`

export const EmptyCartItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;

  p {
    font-size: ${(props) => props.theme.default.text.font.size.small};
    text-align: center;
  }
`
