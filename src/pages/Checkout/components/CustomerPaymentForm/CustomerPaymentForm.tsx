import * as React from 'react'

import { useWatch, useFormContext } from 'react-hook-form'
import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from 'phosphor-react'

import { Input } from '../../../../components'
import { PaymentMethodInput } from '../../components'

import { useUser } from '../../../../context'

import {
  Container,
  FormGroupCep,
  FormGroupCity,
  FormGroupComplement,
  FormGroupNeighbourhood,
  FormGroupNumber,
  FormGroupState,
  FormGroupStreet,
  PaymentMethods,
  PaymentMethodsContainer,
  PaymentMethodsHeader,
  RecipeAddress,
  RecipeAddressHeader,
} from './styles'

export function CustomerPaymentForm() {
  const {
    payment,
    deliveryAddress,
    setPayment,
    setDeliveryAddress
  } = useUser()

  const form = useFormContext()

  const cep = useWatch({
    name: 'cep',
    control: form.control,
    defaultValue: deliveryAddress.cep,
  })

  const addressStreet = useWatch({
    name: 'street',
    control: form.control,
    defaultValue: deliveryAddress.street,
  })

  const addressNumber = useWatch({
    name: 'number',
    control: form.control,
    defaultValue: deliveryAddress.number,
  })

  const addressComplement = useWatch({
    name: 'complement',
    control: form.control,
    defaultValue: deliveryAddress.complement,
  })

  const addressNeighbourhood = useWatch({
    name: 'neighbourhood',
    control: form.control,
    defaultValue: deliveryAddress.neighbourhood,
  })

  const addressCity = useWatch({
    name: 'city',
    control: form.control,
    defaultValue: deliveryAddress.city,
  })

  const addressState = useWatch({
    name: 'state',
    control: form.control,
    defaultValue: deliveryAddress.state,
  })

  const paymentMethod = useWatch({
    name: 'paymentMethod',
    control: form.control,
    defaultValue: payment.method,
  })

  function handlePaymentMethodChange(paymentMethod: string) {
    form.setValue('paymentMethod', paymentMethod)
  }

  React.useEffect(() => {
    Object.entries(payment).forEach(([name, value]) => {
      if (name === 'method') {
        form.setValue('paymentMethod', value)
      }
    })

    Object.entries(deliveryAddress).forEach(([name, value]) => {
      form.setValue(name, value)
    })
  }, [])

  React.useEffect(() => {
    setDeliveryAddress({ cep })
  }, [cep, setDeliveryAddress])

  React.useEffect(() => {
    setDeliveryAddress({
      number: addressNumber,
    })
  }, [addressNumber, setDeliveryAddress])

  React.useEffect(() => {
    setDeliveryAddress({
      street: addressStreet,
    })
  }, [addressStreet, setDeliveryAddress])

  React.useEffect(() => {
    setDeliveryAddress({
      complement: addressComplement,
    })
  }, [addressComplement, setDeliveryAddress])

  React.useEffect(() => {
    setDeliveryAddress({
      neighbourhood: addressNeighbourhood,
    })
  }, [addressNeighbourhood, setDeliveryAddress])

  React.useEffect(() => {
    setDeliveryAddress({ city: addressCity })
  }, [addressCity, setDeliveryAddress])

  React.useEffect(() => {
    setDeliveryAddress({ state: addressState })
  }, [addressState, setDeliveryAddress])

  React.useEffect(() => {
    setPayment({ method: paymentMethod })
  }, [paymentMethod, setPayment])

  return (
    <Container>
      <h4>Complete seu pedido</h4>

      <RecipeAddress>
        <RecipeAddressHeader>
          <span>
            <MapPin size={22} />
          </span>

          <span>
            <h2>Endereço de Entrega</h2>

            <p>Informe o endereço onde deseja receber seu pedido</p>
          </span>
        </RecipeAddressHeader>

        <FormGroupCep>
          <label htmlFor="cep">CEP</label>
          <Input name="cep" type="text" placeholder="CEP" />
        </FormGroupCep>

        <FormGroupStreet>
          <label htmlFor="street">Rua</label>
          <Input name="street" type="text" placeholder="Rua" />
        </FormGroupStreet>

        <FormGroupNumber>
          <label htmlFor="number">Número</label>
          <Input name="number" type="text" placeholder="Número" />
        </FormGroupNumber>

        <FormGroupComplement>
          <label htmlFor="complement">Complemento</label>
          <Input name="complement" type="text" placeholder="Complemento" />
        </FormGroupComplement>

        <FormGroupNeighbourhood>
          <label htmlFor="neighbourhood">Bairro</label>
          <Input name="neighbourhood" type="text" placeholder="Bairro" />
        </FormGroupNeighbourhood>

        <FormGroupCity>
          <label htmlFor="city">Cidade</label>
          <Input name="city" type="text" placeholder="Cidade" />
        </FormGroupCity>

        <FormGroupState>
          <label htmlFor="state">Estado</label>
          <Input name="state" type="text" placeholder="UF" />
        </FormGroupState>
      </RecipeAddress>
      <PaymentMethodsContainer>
        <PaymentMethodsHeader>
          <CurrencyDollar size={22} />

          <span>
            <h2>Pagamento</h2>

            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </span>
        </PaymentMethodsHeader>

        <PaymentMethods>
          <PaymentMethodInput
            active={form.getValues('paymentMethod') === 'credit-card'}
            icon={<CreditCard height={22} />}
            label="Cartão de crédito"
            onClick={() => handlePaymentMethodChange('credit-card')}
            {...form.register('paymentMethod')}
          />

          <PaymentMethodInput
            active={form.getValues('paymentMethod') === 'debit-card'}
            icon={<Bank height={22} />}
            label="Cartão de débito"
            onClick={() => handlePaymentMethodChange('debit-card')}
            {...form.register('paymentMethod')}
          />

          <PaymentMethodInput
            active={form.getValues('paymentMethod') === 'money'}
            label="Dinheiro"
            icon={<Money height={22} />}
            onClick={() => handlePaymentMethodChange('money')}
            {...form.register('paymentMethod')}
          />
        </PaymentMethods>
      </PaymentMethodsContainer>
    </Container>
  )
}
