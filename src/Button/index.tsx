import { Botao, ButtonLinks } from './styles'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void //click vazio para um tipo de botao para quando tiparmos o botao sem resultado
  children: string
}

const Button = ({ type, title, to, onClick, children }: Props) => {
  if (type === 'button') {
    return (
      <Botao type="button" title={title} onClick={onClick}>
        {children}
      </Botao>
    )
  }

  return (
    <ButtonLinks to={to as string} title={title}>
      {children}
    </ButtonLinks>
  )
}

export default Button
