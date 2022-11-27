import * as React from 'react'

import {
  addPayment,
  addDeliveryAddress,
  userReducers,
  PaymentType,
  AddressType,
  DeliveryAddressType,
  CustomerPaymentType,
} from '../../reducers'

interface UserContextType {
  payment: PaymentType
  deliveryAddress: AddressType
  setDeliveryAddress: (address: DeliveryAddressType) => void
  setPayment: (payment: CustomerPaymentType) => void
}

interface UserProviderType {
  children: React.ReactNode
}

export const UserContext = React.createContext({} as UserContextType)

export function UserProvider({ children }: UserProviderType) {
  const [userState, dispatch] = React.useReducer(
    userReducers,
    {
      payment: {},
      deliveryAddress: {},
    },
    () => {
      const storageStateAsJSON = localStorage.getItem(
        '@coffee-delivery:user-state-1.0.0',
      )
      if (storageStateAsJSON) {
        return JSON.parse(storageStateAsJSON)
      }

      return {
        payment: {},
        deliveryAddress: {},
      }
    },
  )

  const handleAddPayment = React.useCallback((payment: CustomerPaymentType) => {
    dispatch(addPayment(payment))
  }, [])

  const handleSetDeliveryAddress = React.useCallback(
    (address: DeliveryAddressType) => {
      dispatch(addDeliveryAddress(address))
    },
    [],
  )

  React.useEffect(() => {
    const stateJSON = JSON.stringify(userState)
    localStorage.setItem('@coffee-delivery:user-state-1.0.0', stateJSON)
  })

  return (
    <UserContext.Provider
      value={{
        payment: userState.payment,
        deliveryAddress: userState.deliveryAddress,
        setPayment: handleAddPayment,
        setDeliveryAddress: handleSetDeliveryAddress,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useUser(): UserContextType {
  return React.useContext(UserContext)
}
