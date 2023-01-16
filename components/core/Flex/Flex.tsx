import styled from 'styled-components'
import { get_padding_sizes } from '@/styles/utils'

export interface FlexProps {
  direction?: string
  align?: string
  justify?: string
  gap?: string
  wrap?: boolean
  width?: string
  flex?: string
  p?: number
  px?: number
  py?: number
  pl?: number
  pr?: number
  pt?: number
  pb?: number
}

const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  align-items: ${({ align }) => align || 'flex-start'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  gap: ${({ gap }) => gap || '0'};
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'unset')};
  width: ${({ width }) => width || '100%'};
  padding: ${(props) => get_padding_sizes(props)};

  ${({ flex }) => (flex ? `& > * {flex: ${flex};}` : '')}
`

export default Flex
