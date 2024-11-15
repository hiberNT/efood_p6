import { TagContainer } from './styles'

export type Props = {
  children: string
}

const Tag = ({ children }: Props) => <TagContainer>{children}</TagContainer>

export default Tag
//children é o nome que quremos dar pra tag quando exporta pra outro arquivo
