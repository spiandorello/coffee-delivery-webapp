import { NavLink } from 'react-router-dom';
import { MapPin, ShoppingCart } from 'phosphor-react';

import CoffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg';

import {
  Logo,
  HeaderContainer,
  LocationBadge,
  CheckoutCart,
} from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <Logo src={CoffeeDeliveryLogo} />

      <nav>
        <LocationBadge>
          <MapPin size={24} weight="fill"  />
          Porto Alegre, RS
        </LocationBadge>

        <NavLink to="/checkout" title="Checkout">
          <CheckoutCart>
            <ShoppingCart size={24} weight="fill" />
          </CheckoutCart>
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}