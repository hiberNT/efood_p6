import { Card, Image, NomePrato, Description, ButtonPrato } from './styles'
type Props = {
  title: string
  description: string
  foto: string
  onClick?: () => void
  id: number
}

const Pizza = ({ title, description, foto, onClick, id }: Props) => {
  return (
    <>
      <Card key={id} onClick={onClick}>
        <Image>
          <img src={foto} alt="pizza" />
        </Image>
        <NomePrato> {title} </NomePrato>
        <Description>{description}</Description>
        <ButtonPrato onClick={onClick}>Mais detalhes</ButtonPrato>
      </Card>
    </>
  )
}

export default Pizza
