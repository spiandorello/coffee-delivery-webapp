import * as React from 'react'

import { ShoppingCart } from 'phosphor-react'

import {
  CoffeeCardContainer,
  CoffeeCardTitle,
  CoffeeCardDescription,
  CoffeeCarContent,
  CoffeeCardIcon,
  CoffeeCardWrapper,
  CoffeeCarActions,
  CoffeeCheckoutButton,
  CoffeeTags,
  CoffeeTag,
} from './styles'

import { money } from '../../../../utils'
import { useShoppingCart } from '../../../../context'
import { InputNumber } from '../../../../components/Form/InputNumber'

// interface CoffeeTypes {
//   express: 'express'
// }

interface CoffeeCardProps {
  type: string
  title: string
  description: string
  price: number
  tags?: string[]
}

export function CoffeeCard(props: CoffeeCardProps) {
  const { title, type, description, price, tags } = props

  const { addShoppingCardItem } = useShoppingCart()

  const [quantity, setQuantity] = React.useState(0)

  function handleChangeCoffeeQuantity(value: number) {
    setQuantity(value)
  }

  function handleAddShoppingCart() {
    addShoppingCardItem({
      type,
      title,
      price,
      quantity,
    })
  }

  function getCoffeeImageUrl(type: string) {
    return new URL(`./../../../../assets/coffee-${type}.svg`, import.meta.url)
      .href
  }

  const coffeeImageUrl = getCoffeeImageUrl(type)

  return (
    <CoffeeCardContainer>
      <CoffeeCardWrapper>
        <CoffeeCardIcon src={coffeeImageUrl} />

        {tags ? (
          <CoffeeTags>
            {tags?.map((tag, key) => (
              <CoffeeTag key={key}>{tag}</CoffeeTag>
            ))}
          </CoffeeTags>
        ) : null}

        <CoffeeCarContent>
          <CoffeeCardTitle>{title}</CoffeeCardTitle>

          <CoffeeCardDescription>{description}</CoffeeCardDescription>
        </CoffeeCarContent>

        <CoffeeCarActions>
          <div>{money.format(price)}</div>

          <InputNumber
            type="number"
            step={1}
            min={0}
            max={50}
            defaultValue={0}
            callback={handleChangeCoffeeQuantity}
          />

          <CoffeeCheckoutButton onClick={handleAddShoppingCart}>
            <ShoppingCart size={24} weight="fill" />
          </CoffeeCheckoutButton>
        </CoffeeCarActions>
      </CoffeeCardWrapper>
    </CoffeeCardContainer>
  )
}
