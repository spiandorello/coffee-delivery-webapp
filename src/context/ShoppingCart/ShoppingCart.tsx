import * as React from 'react'
import {
  addCartItem, emptyCartItems,
  removeCartItem,
  shoppingCartReducers,
} from '../../reducers'

export interface ShoppingCartItem {
  title: string
  type: string
  quantity: number
  price: number
}

interface ShoppingCartContextType {
  deliveryTax: number
  shoppingCartQuantity: number
  shoppingCart: ShoppingCartItem[]
  addShoppingCardItem: (data: ShoppingCartItem) => void
  removeShoppingCardItem: (type: string) => void
  emptyShoppingCartItems: () => void
  createOrder: () => void
}

interface ShoppingCartProviderType {
  children: React.ReactNode
}

export const ShoppingCartContext = React.createContext(
  {} as ShoppingCartContextType,
)

export function ShoppingCartProvider({ children }: ShoppingCartProviderType) {
  const [shoppingCartState, dispatch] = React.useReducer(
    shoppingCartReducers,
    {
      ShoppingCartItems: [],
    },
    () => {
      const storageStateAsJSON = localStorage.getItem(
        '@coffee-delivery:shopping-cart-state-1.0.0',
      )
      if (storageStateAsJSON) {
        return JSON.parse(storageStateAsJSON)
      }

      return {
        shoppingCartItems: [],
      }
    },
  )

  function addShoppingCardItem(shoppingCartItem: ShoppingCartItem) {
    dispatch(addCartItem(shoppingCartItem))
  }

  function removeShoppingCardItem(type: string) {
    dispatch(removeCartItem(type))
  }

  function emptyShoppingCartItems() {
    dispatch(emptyCartItems())
  }

  function createOrder() {
    emptyShoppingCartItems()
  }

  React.useEffect(() => {
    const stateJSON = JSON.stringify(shoppingCartState)
    localStorage.setItem(
      '@coffee-delivery:shopping-cart-state-1.0.0',
      stateJSON,
    )
  })

  return (
    <ShoppingCartContext.Provider
      value={{
        deliveryTax: 3.3,
        shoppingCart: shoppingCartState.shoppingCartItems,
        shoppingCartQuantity: shoppingCartState.shoppingCartQuantity,
        createOrder,
        addShoppingCardItem,
        removeShoppingCardItem,
        emptyShoppingCartItems,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

export function useShoppingCart(): ShoppingCartContextType {
  return React.useContext(ShoppingCartContext)
}
