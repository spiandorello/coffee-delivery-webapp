import {
  CustomerCart,
  CustomerPaymentForm
} from './components';

import { Container } from './styles'

export function Checkout() {
  return (
    <Container>
      <CustomerPaymentForm />

      <CustomerCart />
    </Container>
  )
}