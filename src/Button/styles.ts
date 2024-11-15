import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../styles'

export const Botao = styled.button`
width: 82px;
background-color: ${cores.vermelho};
color: #ffebd9;
font-size: 14px;
font-weight: bold;
margin-top: 16px;
height: 24px;
border: none;
cursor: pointer;
}
`

export const ButtonLinks = styled(Link)`
  border: 2px solid ${cores.branca};
  color: ${cores.branca};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 8px;
`
