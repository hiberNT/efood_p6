import Footer from '../../Footer'
import ListaPizza from '../../components/ListaPizza'
import Fundo from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'
import Prato from '../../assets/images/macarrao.png'
import PratosComida from '../../models/PratosComidas'
import pizza from '../../assets/images/pizza.png'

import {
  HeaderPratos,
  LogoPratos,
  Container,
  Restaurantes,
  Carrinho,
  HeaderPratos2,
  Container2
} from './styles'
import { Link } from 'react-router-dom'

const ITENS: PratosComida[] = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida,manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    foto: pizza
  },
  {
    id: 2,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida,manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    foto: pizza
  },
  {
    id: 3,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida,manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    foto: pizza
  },
  {
    id: 4,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida,manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    foto: pizza
  },
  {
    id: 5,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida,manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    foto: pizza
  },
  {
    id: 6,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida,manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    foto: pizza
  }
]

const Pratos = () => (
  <>
    <HeaderPratos style={{ backgroundImage: `url(${Fundo})` }}>
      <Container>
        <Restaurantes to="/">Restaurantes</Restaurantes>
        <Link to="/">
          <LogoPratos src={logo} alt="logo efood"></LogoPratos>
        </Link>
        <Carrinho>0 Produto(s) no carrinho</Carrinho>
      </Container>
    </HeaderPratos>
    <HeaderPratos2 style={{ backgroundImage: `url(${Prato})` }}>
      <Container2>
        <h2>Italiana</h2>
        <h1>La Dolce Vita Trattoria</h1>
      </Container2>
    </HeaderPratos2>
    <ListaPizza plates={ITENS} />
    <Footer />
  </>
)

export default Pratos
