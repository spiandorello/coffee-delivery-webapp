export enum UserActionsTypes {
  ADD_DELIVERY_ADDRESS = 'ADD_DELIVERY_ADDRESS',
  ADD_PAYMENT = 'ADD_PAYMENT_METHOD',
}

export interface DeliveryAddressType {
  cep?: string
  street?: string
  number?: number
  complement?: string
  neighbourhood?: string
  city?: string
  state?: string
}

export interface CustomerPaymentType {
  method?: 'credit-card' | 'debit-card' | 'money'
}

export function addDeliveryAddress(address: DeliveryAddressType) {
  return {
    type: UserActionsTypes.ADD_DELIVERY_ADDRESS,
    payload: {
      address,
    },
  }
}

export function addPayment(payment: CustomerPaymentType) {
  return {
    type: UserActionsTypes.ADD_PAYMENT,
    payload: {
      payment,
    },
  }
}
