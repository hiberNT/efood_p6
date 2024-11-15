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

type Props = {
  image: string
  title: string
  titleNota: string
  imgNota: string
  category: string
  description: string
}

const Product = ({
  image,
  title,
  titleNota,
  imgNota,
  category,
  description
}: Props) => (
  <>
    <Card>
      <ImagemContainer>
        <img src={image} alt={title} />
      </ImagemContainer>
      <TituloNota>
        <h3>{title}</h3>
        <Nota>
          <h4>{titleNota}</h4>
          <img src={imgNota} alt="star" />
        </Nota>
      </TituloNota>
      <Infos>
        <TagContainer>Destaque da semana</TagContainer>
        <TagContainer>{category}</TagContainer>
      </Infos>
      <Descricao>{description}</Descricao>
      <Link to="/pratos">
        <Button type="button" title="clique para mais informações">
          Saiba mais
        </Button>
      </Link>
    </Card>
  </>
)

export default Product
