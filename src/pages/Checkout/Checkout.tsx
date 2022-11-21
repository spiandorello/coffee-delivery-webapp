import {
  MapPin,
  CurrencyDollar
} from 'phosphor-react';

import { Input } from '../../components';

import {
  Container,
  RecipeAddressForm,
  RecipeAddressFormHeader,
  FormGroupCep,
  FormGroupStreet,
  FormGroupNumber,
  FormGroupComplement,
  FormGroupNeighbourhood,
  FormGroupCity,
  FormGroupState,
  PaymentForm,
  PaymentFormHeader,
} from './styles'

export function Checkout() {
  return (
    <Container>
      <div>
        <h4>Complete seu pedido</h4>

        <form action="">

          <RecipeAddressForm>

            <RecipeAddressFormHeader>

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

            </RecipeAddressFormHeader>

            <FormGroupCep>
              <label htmlFor="cep">CEP</label>
              <Input
                name="cep"
                type="text"
                placeholder="CEP"
              />
            </FormGroupCep>

            <FormGroupStreet>
              <label htmlFor="street">Rua</label>
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

          </RecipeAddressForm>

          <PaymentForm>

            <PaymentFormHeader>

              <span>
                <CurrencyDollar size={22} />
              </span>

              <span>
                <h2>
                  Pagamento
                </h2>

                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja pagar
                </p>
              </span>

            </PaymentFormHeader>



          </PaymentForm>

        </form>
      </div>

      <div>
        <h4>Cafés selecionados</h4>
      </div>
    </Container>
  )
}