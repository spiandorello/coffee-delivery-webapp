
import {
  Container,
  FormGroupCep, FormGroupCity,
  FormGroupComplement, FormGroupNeighbourhood,
  FormGroupNumber, FormGroupState,
  FormGroupStreet, PaymentMethods, PaymentMethodsContainer, PaymentMethodsHeader,
  RecipeAddress,
  RecipeAddressHeader
} from './styles';

import {Bank, CreditCard, CurrencyDollar, MapPin, Money} from 'phosphor-react';

import {Button, Input} from '../../../../components';

export function CustomerPaymentForm() {
  return (
    <Container>
      <h4>Complete seu pedido</h4>

      <form action="">

        <RecipeAddress>

          <RecipeAddressHeader>

              <span>
                <MapPin size={22} />
              </span>

            <span>
                <h2>
                  Endereço de Entrega
                </h2>

                <p>
                  Informe o endereço onde deseja receber seu pedido
                </p>
              </span>

          </RecipeAddressHeader>

          <FormGroupCep>
            <label htmlFor="cep">CEP</label>
            <Input
              name="cep"
              type="text"
              placeholder="CEP"
            />
          </FormGroupCep>

          <FormGroupStreet>
            <Input
              name="street"
              type="text"
              placeholder="Rua"
            />
          </FormGroupStreet>

          <FormGroupNumber>
            <label htmlFor="number">Número</label>
            <Input name="number" type="text" placeholder="Número"/>
          </FormGroupNumber>

          <FormGroupComplement>
            <label htmlFor="complement">Complemento</label>
            <Input name="complement" type="text" placeholder="Complemento"/>
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
                <h2>
                  Pagamento
                </h2>

                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja pagar
                </p>
              </span>

          </PaymentMethodsHeader>


          <PaymentMethods>

            <Button
              icon={<CreditCard height={22} />}
              label="Cartão de crédito"
            />

            <Button
              icon={<Bank height={22} />}
              label="Cartão de débito"
            />

            <Button
              icon={<Money height={22} />}
              label="Dinheiro"
            />

          </PaymentMethods>

        </PaymentMethodsContainer>

      </form>
    </Container>
  )
}