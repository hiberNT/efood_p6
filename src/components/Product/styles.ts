import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'

export const Card = styled(Link)`
  background-color: #ffffff;
  width: 472px;
  border: 1px solid ${cores.vermelho};
  padding: 8px;
  margin-top: 38px;
  position: relative;
  text-decoration: none;

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const ImagemContainer = styled.div`
  padding: 8px;
  display: flex;
  justify-content: center;

  img {
    width: 472px;
    height: 217px;
    margin-top: -15px;
  }
`

export const TituloNota = styled.div`
  display: flex;
  font-size: 18px;
  color: ${cores.vermelho};
  justify-content: space-between;
  margin-top: 8px;
  margin-bottom: 14px;
`

export const Nota = styled.div`
  display: flex;

  h4 {
    width: 26px;
    height: 21px;
  }

  img {
    width: 21px;
    height: 21px;
    margin-left: 8px;
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${cores.vermelho};
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
