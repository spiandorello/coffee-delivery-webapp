import { ShoppingCart } from 'phosphor-react';
import CoffeeExpress from '../../../../assets/coffee-express.svg';

import {
  CoffeeCardContainer,
  CoffeeCardTitle,
  CoffeeCardDescription,
  CoffeeCarContent,
  CoffeeCardIcon,
  CoffeeCardWrapper,
  CoffeeCarActions,
} from './styles';

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <CoffeeCardWrapper>
        <CoffeeCardIcon src={CoffeeExpress} />

        <CoffeeCarContent>
          <CoffeeCardTitle>
            Expresso Tradicional
          </CoffeeCardTitle>

          <CoffeeCardDescription>
            O tradicional café feito com água quente e grãos moídos
          </CoffeeCardDescription>
        </CoffeeCarContent>

        <CoffeeCarActions>
          <div>
            <span>
              R$&nbsp;
            </span>
            <span>
              9,90
            </span>
          </div>

          <input
            type="number"
          />

          <span>
            <ShoppingCart size={24} weight="fill" />
          </span>

        </CoffeeCarActions>
      </CoffeeCardWrapper>
    </CoffeeCardContainer>
  );
}