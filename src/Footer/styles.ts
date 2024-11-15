import styled from 'styled-components'
import { cores } from '../styles'

export const Container = styled.footer`
  background-color: ${cores.vermelhoClaro};
  padding: 32px 0;
  text-align: center;
  margin-top: 56px;
`

export const ImgLogo = styled.img`
  height: 57px;
`

export const ListaSocias = styled.ul`
  display: flex;
  justify-content: center;

  img {
    height: 24px;
    margin-right: 8px;
    margin-top: 24px;
  }
`

export const Description = styled.p`
  display: block;
  font-size: 12px;
  font-weight: 400;
  line-height: 11.72px;
  color: ${cores.vermelho};
  margin-top: 56px;
`
