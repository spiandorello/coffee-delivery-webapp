import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
`;

export const Logo = styled.img`
  height: 40px;
`;

export const LocationBadge = styled.span`
  padding: 0.5rem;
  border-radius: 6px;
  gap: 0.5rem;
  display: flex;
  align-items: center;
  
  color: ${(props) => props.theme.default.pallet['purple-dark']};
  background: ${(props) => props.theme.default.pallet['purple-light']};
`;

export const CheckoutCart = styled.div`
  display: flex;
  align-items: center;
  padding: 0.4rem;
  border-radius: 6px;
  background: ${(props) => props.theme.default.pallet['yellow-light']};
  color: ${(props) => props.theme.default.pallet['yellow-dark']};
`;