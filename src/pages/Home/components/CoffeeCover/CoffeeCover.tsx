import {
  Coffee,
  Package,
  ShoppingCart,
  Timer
} from 'phosphor-react';

import CoffeeDeliveryCover from '../../../../assets/coffee-delivery-cover.svg';

import {
  Presentation,
  IconWrapper,
} from './styles';

export function CoffeeCover() {
  return (
    <Presentation>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

        <ul>
          <li>
            <IconWrapper
              color="yellow-dark"
            >
              <ShoppingCart size={16} weight="fill" />
            </IconWrapper>
            <p>Compra simples e segura</p>
          </li>

          <li>
            <IconWrapper
              color="base-text"
            >
              <Package size={16} weight="fill" />
            </IconWrapper>
            <p>Embalagem mantém o café intacto</p>
          </li>

          <li>
            <IconWrapper
              color="yellow"
            >
              <Timer size={16} weight="fill" />
            </IconWrapper>
            <p>Entrega rápida e rastreada</p>
          </li>

          <li>
            <IconWrapper
              color="purple"
            >
              <Coffee size={16} weight="fill" />
            </IconWrapper>
            <p>O café chega fresquinho até você</p>
          </li>

        </ul>
      </div>

      <img src={CoffeeDeliveryCover} alt="" />
    </Presentation>
  )
}