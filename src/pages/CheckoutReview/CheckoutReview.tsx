import {
  Clock,
  MapPin,
  CurrencyDollar,
} from 'phosphor-react';

import { useUser } from '../../context';
import DeliverySuccessCover from '../../assets/delivery-success-cover.svg';

import {
  Header,
  Container,
  Content,
  OrderInfo,
  OrderInfoStatus,
} from './styles'

export function CheckoutReview() {
  const { deliveryAddress, payment } = useUser();
  return (
    <Container>
      <div>

        <Header>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </Header>

        <Content>

          <OrderInfo>
            <OrderInfoStatus color="purple">
              <MapPin height={16} weight="fill" />
            </OrderInfoStatus>

            <p>
              Entrega em&nbsp;
              <strong>
                {deliveryAddress.street}, &nbsp;
                {deliveryAddress.number}
              </strong>&nbsp;
              {deliveryAddress.neighbourhood}&nbsp;
              - {deliveryAddress.city},&nbsp;
              {deliveryAddress.state}&nbsp;
            </p>
          </OrderInfo>

          <OrderInfo>
            <OrderInfoStatus color="yellow-dark">
              <Clock height={16} weight="fill" />
            </OrderInfoStatus>

            <div>
              <p>Previsão de entrega</p>
              <strong>20 - 30 min</strong>
            </div>
          </OrderInfo>

          <OrderInfo>
            <OrderInfoStatus color="yellow">
              <CurrencyDollar height={16} weight="fill" />
            </OrderInfoStatus>

            <div>
              <p>Pagamento na entrega</p>

              {payment.method === 'credit-card' && (
                <strong>Cartão de crédito</strong>
              )}

              {payment.method === 'debit-card' && (
                <strong>Cartão de débito</strong>
              )}

              {payment.method === 'money' && (
                <strong>Dinheiro</strong>
              )}

            </div>
          </OrderInfo>

        </Content>
      </div>

      <img src={DeliverySuccessCover} alt=""/>
    </Container>
  )
}