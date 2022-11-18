import { ShoppingCart } from 'phosphor-react';
import Coffee from '../../../../assets/coffee-express.svg'

import {
  CoffeeCardContainer,
  CoffeeCardTitle,
  CoffeeCardDescription,
  CoffeeCarContent,
  CoffeeCardIcon,
  CoffeeCardWrapper,
  CoffeeCarActions,
  CoffeeQuantityInput,
  CoffeeCheckoutButton,
  CoffeeTags,
  CoffeeTag,
} from './styles';

import { money } from '../../../../utils';

interface CoffeeTypes {
  express: 'express',
}

interface CoffeeCardProps {
  type: string
  title: string
  description: string
  price: number
  tags?: string[]
}

export function CoffeeCard(props: CoffeeCardProps) {
  const {
    title,
    description,
    price,
    tags,
  } = props;

  return (
    <CoffeeCardContainer>
      <CoffeeCardWrapper>
        <CoffeeCardIcon src={Coffee} />

        {tags ?
          <CoffeeTags>
            {tags?.map((tag) => (
              <CoffeeTag>{tag}</CoffeeTag>
            ))}
          </CoffeeTags>
          :
          null
        }

        <CoffeeCarContent>
          <CoffeeCardTitle>
            {title}
          </CoffeeCardTitle>

          <CoffeeCardDescription>
            {description}
          </CoffeeCardDescription>
        </CoffeeCarContent>

        <CoffeeCarActions>
          <div>
            {money.format(price)}
          </div>

          <CoffeeQuantityInput
            type="number"
            step={1}
            min={0}
            defaultValue={0}
          />

          <CoffeeCheckoutButton>
            <ShoppingCart size={24} weight="fill" />
          </CoffeeCheckoutButton>

        </CoffeeCarActions>
      </CoffeeCardWrapper>
    </CoffeeCardContainer>
  );
}