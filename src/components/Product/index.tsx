import {
  Nota,
  TituloNota,
  Card,
  Descricao,
  ImagemContainer,
  Infos
} from './styles'
import { TagContainer } from '../Tag/styles'
import Button from '../../Button'
import { Link } from 'react-router-dom'
import star from '../../assets/images/estrela.png'

type Props = {
  image: string
  title: string
  titleNota: string
  category: string
  description: string
  destacado: string
  id: number
}

const Product = ({
  image,
  title,
  titleNota,
  category,
  description,
  destacado,
  id
}: Props) => (
  <>
    <Card to={`/pratos/${id}`}>
      <ImagemContainer>
        <img src={image} alt={title} />
      </ImagemContainer>
      <TituloNota>
        <h3>{title}</h3>
        <Nota>
          <h4>{titleNota}</h4>
          <img src={star} alt="star" />
        </Nota>
      </TituloNota>
      <Infos>
        <TagContainer>{destacado}</TagContainer>
        <TagContainer>{category}</TagContainer>
      </Infos>
      <Descricao>{description}</Descricao>
      <Link to={`/pratos/`}>
        <Button type="button" title="clique para mais informações">
          Saiba mais
        </Button>
      </Link>
    </Card>
  </>
)

export default Product
// to={'/pratos/'}
