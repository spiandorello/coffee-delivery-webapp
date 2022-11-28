import { produce } from 'immer'

import { ActionsTypes } from './actions'

export interface ShoppingCartItem {
  title: string
  type: string
  quantity: number
  price: number
}

interface ShoppingCartInterface {
  shoppingCartItems: ShoppingCartItem[]
  shoppingCartQuantity: number
}

function getShoppingCartItemIndex(
  shoppingCartItems: ShoppingCartItem[],
  type: string,
): number {
  return shoppingCartItems.findIndex(
    (shoppingCartItem) => shoppingCartItem.type === type,
  )
}

export function shoppingCartReducers(
  state: ShoppingCartInterface,
  action: any,
) {
  switch (action.type) {
    case ActionsTypes.ADD_CART_ITEM:
      return produce(state, (draft) => {
        const shoppingCartItemIndex = getShoppingCartItemIndex(
          draft.shoppingCartItems,
          action.payload.shoppingCartItem.type,
        )

        if (shoppingCartItemIndex < 0) {
          draft.shoppingCartItems.push(action.payload.shoppingCartItem)
        } else {
          draft.shoppingCartItems[shoppingCartItemIndex] =
            action.payload.shoppingCartItem
        }

        draft.shoppingCartQuantity = draft.shoppingCartItems.reduce(
          (acm, cartItem: ShoppingCartItem) => {
            return cartItem.quantity + acm
          },
          0,
        )
      })
    case ActionsTypes.REMOVE_CART_ITEM:
      return produce(state, (draft) => {
        const shoppingCartItemIndex = getShoppingCartItemIndex(
          draft.shoppingCartItems,
          action.payload.type,
        )

        delete draft.shoppingCartItems[shoppingCartItemIndex]

        draft.shoppingCartItems = draft.shoppingCartItems.filter((item) => item)

        draft.shoppingCartQuantity = draft.shoppingCartItems.reduce(
          (acm, cartItem: ShoppingCartItem) => {
            return cartItem.quantity + acm
          },
          0,
        )
      })
    case ActionsTypes.EMPTY_CART_ITEMS:
      return {
        shoppingCartItems: [],
        shoppingCartQuantity: 0,
      }
    default:
      return state
  }
}
