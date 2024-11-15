import { Card, Image, NomePrato, Description, ButtonPrato } from './styles'

type Props = {
  title: string
  description: string
  foto: string
}

const Pizza = ({ title, description, foto }: Props) => (
  <Card>
    <Image>
      <img src={foto} alt="pizza" />
    </Image>
    <NomePrato> {title} </NomePrato>
    <Description>{description}</Description>
    <ButtonPrato>Adicionar ao carrinho</ButtonPrato>
  </Card>
)

export default Pizza
