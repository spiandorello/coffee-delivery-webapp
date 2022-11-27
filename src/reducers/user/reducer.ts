import { produce } from 'immer'

import { ActionsTypes } from './actions'

export interface AddressType {
  cep: string
  street: string
  number: number
  complement?: string
  neighbourhood: string
  city: string
  state: string
}

export interface PaymentType {
  method?: 'credit-card' | 'debit-card' | 'money'
}

export interface UserInterface {
  payment: PaymentType
  deliveryAddress: AddressType
}

export function userReducers(state: UserInterface, action: any) {
  switch (action.type) {
    case ActionsTypes.ADD_DELIVERY_ADDRESS:
      return produce(state, (draft) => {
        draft.deliveryAddress = {
          ...draft.deliveryAddress,
          ...action.payload.address,
        }
      })
    case ActionsTypes.ADD_PAYMENT:
      return produce(state, (draft) => {
        draft.payment = {
          ...draft.payment,
          ...action.payload.payment,
        }
      })
    default:
      return state
  }
}
