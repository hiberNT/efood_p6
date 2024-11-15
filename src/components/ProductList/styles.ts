import styled from 'styled-components'
import { Card } from '../Product/styles'

export const Container = styled.section`
  padding: 32px 0;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 14px;

  ${Card} {
    margin-top: 56px;
  }
`
