import * as React from 'react'
import { Trash } from 'phosphor-react'

import { ShoppingCartItem, useShoppingCart } from '../../../../context'

import {
  Container,
  CartList,
  CartItem,
  CartItemActions,
  CartPaymentInfo,
} from './styles'
import { InputNumber } from '../../../../components/Form/InputNumber'
import { Button } from '../../../../components'

export function CustomerCart() {
  const { shoppingCart, addShoppingCardItem, removeShoppingCardItem } =
    useShoppingCart()

  function getCoffeeImageUrl(type: string) {
    return new URL(`./../../../../assets/coffee-${type}.svg`, import.meta.url)
      .href
  }

  function handleChangeCoffeeQuantity(
    item: ShoppingCartItem,
    quantity: number,
  ) {
    addShoppingCardItem({
      type: item.type,
      title: item.title,
      price: item.price,
      quantity,
    })
  }

  return (
    <Container>
      <h4>Complete seu pedido</h4>

      <div>
        <CartList>
          {shoppingCart.map((item, key) => {
            const { type, title, price } = item
            const coffeeImageUrl = getCoffeeImageUrl(type)

            return (
              <CartItem key={key}>
                <img src={coffeeImageUrl} alt="" />

                <span>
                  <span>{title}</span>

                  <CartItemActions>
                    <InputNumber
                      type="number"
                      step={1}
                      min={0}
                      max={50}
                      defaultValue={item.quantity}
                      onValueChange={(quantity) =>
                        handleChangeCoffeeQuantity(item, quantity)
                      }
                    />

                    <Button
                      icon={<Trash size={18} />}
                      label="Remover"
                      size="small"
                      onClick={() => removeShoppingCardItem(type)}
                    />
                  </CartItemActions>
                </span>

                <span>R$ {price}</span>
              </CartItem>
            )
          })}
        </CartList>

        <CartPaymentInfo>
          <div>
            <span>Total de itens</span>
            <span>R$ 29,70</span>
          </div>

          <div>
            <span>Entrega</span>
            <span>R$ 3,70</span>
          </div>

          <div>
            <h3>Total</h3>
            <h3>R$ 33,70</h3>
          </div>
        </CartPaymentInfo>

        <Button
          variant="secondary"
          label="Confirmar pedido"
          onClick={() => {}}
        />
      </div>
    </Container>
  )
}
