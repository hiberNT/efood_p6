import { useState } from 'react'
import Pizza from '../Pizza'
import {
  Container,
  Conteudo,
  DescriptionModal,
  ImageClose,
  ImagePizza,
  List,
  Modal,
  Title
} from './styles'
import { ButtonPrato } from '../Pizza/styles'
import fechar from '../../assets/images/close 1.png'
import pizza from '../../assets/images/pizza.png'

type Prato = {
  id: number
  foto: string
  nome: string
  descricao: string
  preco: number
}

export type Props = {
  cardapio: Prato[]
}

const ListaPizza = ({ cardapio }: Props) => {
  const [modalEstarAberto, setModalEstaAberto] = useState(false)
  const [pratoSelecionado, setPratoSelecionado] = useState<Prato | null>(null)

  return (
    <>
      <div className="container">
        <Container>
          <List>
            {cardapio.map((plate) => (
              <Pizza
                key={plate.id}
                id={plate.id}
                onClick={() => {
                  setModalEstaAberto(true)
                  setPratoSelecionado(plate) // Armazenar o prato selecionado no estado
                }}
                foto={plate.foto}
                title={plate.nome}
                description={plate.descricao}
              />
            ))}
          </List>
        </Container>
      </div>

      <Modal className={modalEstarAberto ? 'visivel' : 'modal'}>
        <div
          className="overlay"
          onClick={() => setModalEstaAberto(false)}
        ></div>
        <Conteudo>
          <ImageClose src={fechar} onClick={() => setModalEstaAberto(false)} />
          <ImagePizza src={pizza} />
          <div>
            <Title>{pratoSelecionado?.nome}</Title>
            <DescriptionModal>{pratoSelecionado?.descricao}</DescriptionModal>
            <ButtonPrato>
              Adicionar ao carrinho - Preço: {pratoSelecionado?.preco}
            </ButtonPrato>
          </div>
        </Conteudo>
      </Modal>
    </>
  )
}

export default ListaPizza
