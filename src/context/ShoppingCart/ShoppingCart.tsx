import * as React from 'react';

interface ShoppingCartContextType {
  shoppingCart: ShoppingCardItem[],
  addShoppingCardItem: (data: ShoppingCardItem) => void,
}

interface ShoppingCartProviderType {
  children: React.ReactNode
}

interface ShoppingCardItem {
  title: string
  type: string
  quantity: number
  price: number
}

export const ShoppingCartContext = React.createContext({} as ShoppingCartContextType);

export function ShoppingCartProvider({ children }: ShoppingCartProviderType) {
  const [shoppingCart, setShoppingCart] = React.useState<ShoppingCardItem[]>([]);

  function addShoppingCardItem(data: ShoppingCardItem) {
    setShoppingCart((carts) => {
      return [
        ...carts,
        data,
      ];
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart,
        addShoppingCardItem,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

export function useShoppingCart(): ShoppingCartContextType {
  return React.useContext(ShoppingCartContext);
}