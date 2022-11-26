import * as React from 'react'

interface ShoppingCartContextType {
  shoppingCartQuantity: number
  shoppingCart: ShoppingCartItem[]
  addShoppingCardItem: (data: ShoppingCartItem) => void
  removeShoppingCardItem: (type: string) => void
}

interface ShoppingCartProviderType {
  children: React.ReactNode
}

export interface ShoppingCartItem {
  title: string
  type: string
  quantity: number
  price: number
}

export const ShoppingCartContext = React.createContext(
  {} as ShoppingCartContextType,
)

export function ShoppingCartProvider({ children }: ShoppingCartProviderType) {
  const [shoppingCart, setShoppingCart] = React.useState<ShoppingCartItem[]>([])
  const [shoppingCartQuantity, setShoppingCartQuantity] = React.useState(0)

  function addShoppingCardItem(data: ShoppingCartItem) {
    setShoppingCart((carts) => {
      const coffeeCartIndex = carts.findIndex((cart) => cart.type === data.type)

      let cartItems = carts
      if (coffeeCartIndex >= 0) {
        cartItems[coffeeCartIndex] = data
      } else {
        cartItems = [...carts, data]
      }

      const cartItemsQuantity = cartItems.reduce(
        (acm, cartItem: ShoppingCartItem) => {
          return cartItem.quantity + acm
        },
        0,
      )

      setShoppingCartQuantity(cartItemsQuantity)

      return cartItems
    })
  }

  function removeShoppingCardItem(type: string) {
    setShoppingCart((shoppingCartItems) => {
      const shoppingCartItemIndex = shoppingCartItems.findIndex((item) => item?.type === type);
      if (shoppingCartItemIndex >= 0) {
        delete shoppingCartItems[shoppingCartItemIndex];
      }

      const cartItems = shoppingCartItems.filter(item => item);

      const cartItemsQuantity = cartItems.reduce(
        (acm, cartItem: ShoppingCartItem) => {
          return cartItem.quantity + acm
        },
        0,
      )

      setShoppingCartQuantity(cartItemsQuantity)

      return cartItems;
    })
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart,
        shoppingCartQuantity,
        addShoppingCardItem,
        removeShoppingCardItem,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

export function useShoppingCart(): ShoppingCartContextType {
  return React.useContext(ShoppingCartContext)
}
