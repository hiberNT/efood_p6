import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 384px;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Logo = styled.img`
  height: 57px;
  top: 40px;
  position: absolute;
`

export const Titulo = styled.p`
  font-weight: 900;
  font-size: 36px;
  color: ${cores.vermelho};
  margin-top: 236px;
  height: 84px;

  span {
    margin-left: 10%;
  }
`
