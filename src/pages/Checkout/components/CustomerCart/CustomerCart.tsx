import * as React from 'react'
import { Trash } from 'phosphor-react'
import { useFormContext } from 'react-hook-form';

import { Button, InputNumber } from '../../../../components'
import { ShoppingCartItem, useShoppingCart } from '../../../../context'

import {
  Container,
  CartList,
  CartItem,
  CartItemActions,
  CartPaymentInfo,
  EmptyCartItems,
} from './styles'

export function CustomerCart() {
  const {
    deliveryTax,
    shoppingCart,
    addShoppingCardItem,
    removeShoppingCardItem,
  } = useShoppingCart()

  const form = useFormContext();

  const [totalItems, setTotalItems] = React.useState(0)
  const [totalPrice, setTotalPrice] = React.useState(0)

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

  React.useEffect(() => {
    const totalItemsPrice = shoppingCart.reduce((acm, { quantity, price }) => {
      return acm + quantity * price
    }, 0)

    setTotalItems(totalItemsPrice)
  }, [JSON.stringify(shoppingCart), shoppingCart])

  React.useEffect(() => {
    setTotalPrice(totalItems + deliveryTax)
  }, [totalItems, deliveryTax])

  const hasShoppingCartItems = shoppingCart.length > 0 && form.formState.isValid

  return (
    <Container>
      <h4>Complete seu pedido</h4>

      <div>
        {!hasShoppingCartItems ? (
          <EmptyCartItems>
            <h3>Carrinho vazio</h3>
            <p>Selecione seus cafés no catálogo para finalizar sua compra.</p>
          </EmptyCartItems>
        ) : (
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
                        callback={(quantity) =>
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
        )}

        <CartPaymentInfo>
          <div>
            <span>Total de itens</span>
            <span>R$ {totalItems}</span>
          </div>

          <div>
            <span>Entrega</span>
            {hasShoppingCartItems ? (
              <span>R$ {deliveryTax}</span>
            ) : (
              <span>R$ 0,00</span>
            )}
          </div>

          <div>
            <h3>Total</h3>
            {hasShoppingCartItems ? (
              <h3>R$ {totalPrice}</h3>
            ) : (
              <span>R$ 0,00</span>
            )}
          </div>
        </CartPaymentInfo>

        <Button
          type="submit"
          variant="secondary"
          label="Confirmar pedido"
          disabled={!hasShoppingCartItems}
        />
      </div>
    </Container>
  )
}
