import * as React from 'react'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'

import { CustomerCart, CustomerPaymentForm } from './components'

import { Container } from './styles'

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
  const form = useForm({
    resolver: zodResolver(deliveryUserInfoSchema),
  })

  function handleCreateOrder(data: any) {
    console.log(data)
  }

  function checkoutInvalid() {
    console.log(form.formState.errors)
    console.log(form.getValues())
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(handleCreateOrder, checkoutInvalid)}>
        <Container>
          <CustomerPaymentForm />
          <CustomerCart />
        </Container>
      </form>
    </FormProvider>
  )
}
