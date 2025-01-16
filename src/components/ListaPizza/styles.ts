import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.section`
  padding: 32px 0;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 14px;
`
export const Conteudo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: ${cores.vermelho};
  color: ${cores.branca};
  width: 1024px;
  height: 344px;
  align-items: center;
  padding: 32px;
  position: relative;
  z-index: 1;
`

export const ImagePizza = styled.img`
  width: 280px;
  height: 280px;
`

export const ImageClose = styled.img`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 16px;
  height: 16px;
  cursor: pointer;
`

export const Title = styled.h2`
  font-size: 18px;
`

export const DescriptionModal = styled.p`
  font-size: 14px;
  line-height: 22px;
  height: 176px;
  width: 656px;
  margin-top: 16px;
  margin-bottom: 16px;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`
