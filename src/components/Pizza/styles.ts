import { styled } from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  width: 320px;
  height: 338px;
  padding: 8px;
  background-color: ${cores.vermelho};
  margin-top: 24px;
`

export const Image = styled.div`
  padding: 8px;
  display: flex;
  justify-content: center;
`
export const NomePrato = styled.h2`
  font-size: 16px;
  margin-bottom: 8px;
  color: ${cores.branco2};
`

export const Description = styled.p`
  font-size: 14px;
  color: ${cores.branco2};
`
export const ButtonPrato = styled.button`
  background-color: ${cores.branco2};
  height: 24px;
  width: 304px;
  font-size: 14px;
  font-weight: bold;
  color: ${cores.vermelho};
  border: none;
  margin-top: 16px;
  cursor: pointer;
`
