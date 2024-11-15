import Fundo from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'
import { Imagem, Logo, Titulo } from './styles'

const Hero = () => (
  <Imagem style={{ backgroundImage: `url(${Fundo})` }}>
    <Logo src={logo} alt="logo efood"></Logo>
    <Titulo>
      Viva experiências gastronômicas <br />
      <span>no conforto da sua casa</span>
    </Titulo>
  </Imagem>
)

export default Hero
