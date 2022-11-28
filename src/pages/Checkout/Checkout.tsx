import * as React from 'react'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

import { CustomerCart, CustomerPaymentForm } from './components'

import { Container } from './styles'
import { useShoppingCart } from '../../context';

const deliveryUserInfoSchema = zod.object({
  cep: zod.string(),
  number: zod.string(),
  street: zod.string(),
  complement: zod.optional(zod.string()),
  neighbourhood: zod.string(),
  city: zod.string(),
  state: zod.string(),
  paymentMethod: zod.string(),
})

export function Checkout() {
  const navigate = useNavigate();
  const { createOrder } = useShoppingCart();

  const form = useForm({
    resolver: zodResolver(deliveryUserInfoSchema),
  })

  function handleCreateOrder(data: any) {
    createOrder()
    navigate('/checkout/review')
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(handleCreateOrder)}>
        <Container>
          <CustomerPaymentForm />
          <CustomerCart />
        </Container>
      </form>
    </FormProvider>
  )
}
