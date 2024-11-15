import logo from '../assets/images/logo.png'
import { Container, ImgLogo, ListaSocias, Description } from './styles'
import Ig from '../assets/images/instagram-round-svgrepo-com (1) 1.png'
import Twiter from '../assets/images/twitter-2-svgrepo-com 1.png'
import Face from '../assets/images/facebook-round-svgrepo-com 1.png'
const Footer = () => (
  <Container>
    <ImgLogo src={logo} alt="Logo"></ImgLogo>
    <ListaSocias>
      <img src={Ig} alt="" />
      <img src={Face} alt="" />
      <img src={Twiter} alt="" />
    </ListaSocias>
    <Description>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
      estabelecimento contratado.
    </Description>
  </Container>
)

export default Footer
