import { ShoppingCartItem } from './reducer'

export enum ActionsTypes {
  ADD_CART_ITEM = 'ADD_CART_ITEM',
  REMOVE_CART_ITEM = 'REMOVE_CART_ITEM',
  EMPTY_CART_ITEMS = 'EMPTY_CART_ITEMS',
}

export function addCartItem(shoppingCartItem: ShoppingCartItem) {
  return {
    type: ActionsTypes.ADD_CART_ITEM,
    payload: {
      shoppingCartItem,
    },
  }
}

export function removeCartItem(type: string) {
  return {
    type: ActionsTypes.REMOVE_CART_ITEM,
    payload: {
      type,
    },
  }
}

export function emptyCartItems() {
  return {
    type: ActionsTypes.EMPTY_CART_ITEMS,
    payload: {},
  }
}
