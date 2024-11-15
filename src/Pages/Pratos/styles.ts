import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const HeaderPratos = styled.div`
  height: 186px;
  padding-top: 56px;
`

export const LogoPratos = styled.img`
  height: 57px;
  cursor: pointer;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`

export const Restaurantes = styled(Link)`
  text-decoration: none;
  align-content: center;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  color: ${cores.vermelho};
`

export const Carrinho = styled.h2`
  align-content: center;
  font-size: 18px;
  font-weight: bold;
  color: ${cores.vermelho};
`
export const HeaderPratos2 = styled.div`
  height: 280px;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.5);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }

  & > * {
    position: relative;
    z-index: 2;
  }
`

export const Container2 = styled.div`
  margin-left: 248px;

  h1 {
    color: white;
  }

  h2 {
    color: #ffffff;
    font-size: 32px;
    font-weight: 100;
    margin-bottom: 182px;
    padding-top: 8px;
  }
`
