import ProductList from '../../components/ProductList'
import star from '../../assets/images/estrela.png'
import prato1 from '../../assets/images/imagem.png'
import prato2 from '../../assets/images/image 1.png'
import Restaurante from '../../models/Restaurante'
import Hero from '../../components/Hero'
import Footer from '../../Footer'

const Item: Restaurante[] = [
  {
    id: 1,
    title: 'Hioki Sushi ',
    titleNota: '4,9',
    imgNota: star,
    category: 'Japonesa',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: prato1
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria ',
    titleNota: '4,6',
    imgNota: star,
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: prato2
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria ',
    titleNota: '4,6',
    imgNota: star,
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: prato2
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria ',
    titleNota: '4,6',
    imgNota: star,
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: prato2
  },
  {
    id: 5,
    title: 'La Dolce Vita Trattoria ',
    titleNota: '4,6',
    imgNota: star,
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: prato2
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria ',
    titleNota: '4,6',
    imgNota: star,
    category: 'Italiana',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: prato2
  }
]

export const Home = () => (
  <>
    <Hero />
    <ProductList pratos={Item} />
    <Footer />
  </>
)
