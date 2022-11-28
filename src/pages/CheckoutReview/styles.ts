import styled from 'styled-components'
import {PalletsProps} from '../../styles/themes';

export const Container = styled.div`
  align-items: center;
  justify-content: center;
  height: 100%;
  display: grid;
  grid-template-columns: 6fr 6fr;
  padding: 0 2rem;
  gap: 2rem;
  
  & > div {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
  
  img {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const Header = styled.div`
  h1 {
    color: ${props => props.theme.default.pallet['yellow-dark']};
  }
`

export const Content = styled.div`
  gap: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  border-radius: 6px 36px;
  border: 1px solid ${(props) => props.theme.default.pallet['purple']};
`

export const OrderInfo = styled.div`
  gap: 1rem;
  display: flex;
  align-items: center;
  
`

interface OrderInfoStatusInterface {
  color: keyof PalletsProps
}

export const OrderInfoStatus = styled.span<OrderInfoStatusInterface>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 0.5rem;

  background: ${(props) => props.theme.default.pallet[props.color]};

  svg {
    color: ${({ theme }) => theme.default.pallet.white};
  }
`
