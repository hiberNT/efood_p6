import { useEffect, useState } from 'react'
import Footer from '../../Footer'
import ListaPizza from '../../components/ListaPizza'
import Fundo from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'
import Prato from '../../assets/images/macarrao.png'

import {
  HeaderPratos,
  LogoPratos,
  Container,
  Restaurantes,
  Carrinho,
  HeaderPratos2,
  Container2
} from './styles'
import { Link, useParams } from 'react-router-dom'
import { Restaurante } from '../Home'

const Pratos = () => {
  const [prato, setPrato] = useState<Restaurante>()
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setPrato(res))
  }, [id])

  return (
    <>
      <HeaderPratos style={{ backgroundImage: `url(${Fundo})` }}>
        <Container>
          <Restaurantes to="/">Restaurantes</Restaurantes>
          <Link to="/">
            <LogoPratos src={logo} alt="logo efood" />
          </Link>
          <Carrinho>0 Produto(s) no carrinho</Carrinho>
        </Container>
      </HeaderPratos>
      <HeaderPratos2 style={{ backgroundImage: `url(${Prato})` }}>
        <Container2>
          <h2>{prato?.titulo}</h2>
          <h1>{prato?.tipo}</h1>
        </Container2>
      </HeaderPratos2>
      {<ListaPizza {} />}
      <Footer />
    </>
  )
}

export default Pratos
