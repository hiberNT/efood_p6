import Pizza from '../Pizza'
import PratosComida from '../../models/PratosComidas'
import { Container, List } from './styles'

export type Props = {
  plates: PratosComida[]
}

const ListaPizza = ({ plates }: Props) => (
  <div className="container">
    <Container>
      <List>
        {plates.map((plate) => (
          <Pizza
            key={plate.id}
            foto={plate.foto}
            title={plate.title}
            description={plate.description}
          />
        ))}
      </List>
    </Container>
  </div>
)

export default ListaPizza
