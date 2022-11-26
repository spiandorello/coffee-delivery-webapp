import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import CoffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'

import { Logo, HeaderContainer, LocationBadge, CheckoutCart } from './styles'
import { useShoppingCart } from '../../context'

export function Header() {
  const { shoppingCartQuantity } = useShoppingCart()

  return (
    <HeaderContainer>
      <NavLink to="/">
        <Logo src={CoffeeDeliveryLogo} />
      </NavLink>

      <nav>
        <LocationBadge>
          <MapPin size={24} weight="fill" />
          Porto Alegre, RS
        </LocationBadge>

        <NavLink to="/checkout" title="Checkout">
          <CheckoutCart quantity={shoppingCartQuantity}>
            <ShoppingCart size={24} weight="fill" />
          </CheckoutCart>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
