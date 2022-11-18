import {
  CoffeeList,
  CoffeeListItem,
  CoffeeContainer,
} from './styles'

import { CoffeeCard } from '../index';
import { coffeeList } from '../../../../mocks/coffee-list';

export function CoffeeMenu() {
  return (
    <CoffeeContainer>
      <h2>Nossos cafés</h2>

      <CoffeeList>
        {coffeeList.map(({
          type,
          tags,
          title,
          description,
          price,
         }, key) => (
          <CoffeeListItem key={key}>
            <CoffeeCard
              type={type}
              tags={tags}
              title={title}
              description={description}
              price={price}
            />
          </CoffeeListItem>
        ))}

      </CoffeeList>
    </CoffeeContainer>
  )
}