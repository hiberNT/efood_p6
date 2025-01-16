import ProductList from '../../components/ProductList'
import Hero from '../../components/Hero'
import Footer from '../../Footer'
import { useEffect, useState } from 'react'

export type Restaurante = {
  id: number
  titulo: string
  destacado: string
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }[]
}

export const Home = () => {
  const [Item, setItem] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setItem(res))
  }, [])

  return (
    <>
      <Hero />
      <ProductList pratos={Item} />
      <Footer />
    </>
  )
}
