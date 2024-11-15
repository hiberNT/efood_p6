import Restaurante from '../../models/Restaurante'
import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  pratos: Restaurante[]
}

const ProductList = ({ pratos }: Props) => (
  <div className="container">
    <Container>
      <List>
        {pratos.map((prato) => (
          <Product
            key={prato.id}
            image={prato.image}
            title={prato.title}
            category={prato.category}
            description={prato.description}
            titleNota={prato.titleNota}
            imgNota={prato.imgNota}
          />
        ))}
      </List>
    </Container>
  </div>
)

export default ProductList
