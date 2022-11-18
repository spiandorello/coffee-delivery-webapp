import { CoffeeMenu, CoffeeCover } from './components';

import { HomeContainer } from './styles';

export function Home() {
  return (
    <HomeContainer>
      <CoffeeCover />
      <CoffeeMenu />
    </HomeContainer>
  );
}