import Product from '../Product'
import { Container, List } from './styles'
import { Restaurante } from '../../Pages/Home'

export type Props = {
  pratos: Restaurante[]
}

const ProductList = ({ pratos }: Props) => (
  <div className="container">
    <Container>
      <List>
        {pratos.map((prato) => (
          <Product
            id={prato.id}
            key={prato.id}
            title={prato.titulo}
            category={prato.tipo}
            titleNota={prato.avaliacao.toString()}
            description={prato.descricao}
            image={prato.capa}
            destacado={prato.destacado}
          />
        ))}
      </List>
    </Container>
  </div>
)

export default ProductList
