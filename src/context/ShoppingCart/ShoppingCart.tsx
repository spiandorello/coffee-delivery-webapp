import * as React from 'react'

interface ShoppingCartContextType {
  shoppingCartQuantity: number
  shoppingCart: ShoppingCardItem[]
  addShoppingCardItem: (data: ShoppingCardItem) => void
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

export const ShoppingCartContext = React.createContext(
  {} as ShoppingCartContextType,
)

export function ShoppingCartProvider({ children }: ShoppingCartProviderType) {
  const [shoppingCart, setShoppingCart] = React.useState<ShoppingCardItem[]>([])
  const [shoppingCartQuantity, setShoppingCartQuantity] = React.useState(0)

  function addShoppingCardItem(data: ShoppingCardItem) {
    setShoppingCart((carts) => {
      const coffeeCartIndex = carts.findIndex((cart) => cart.type === data.type)

      let cartItems = carts
      if (coffeeCartIndex >= 0) {
        cartItems[coffeeCartIndex] = data
      } else {
        cartItems = [...carts, data]
      }

      const cartItemsQuantity = cartItems.reduce(
        (acm, cartItem: ShoppingCardItem) => {
          return cartItem.quantity + acm
        },
        0,
      )

      setShoppingCartQuantity(cartItemsQuantity)

      return cartItems
    })
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart,
        shoppingCartQuantity,
        addShoppingCardItem,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

export function useShoppingCart(): ShoppingCartContextType {
  return React.useContext(ShoppingCartContext)
}
