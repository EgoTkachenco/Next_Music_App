import React from 'react'
import styled from 'styled-components'
import { get_padding_sizes } from '@/styles/utils'

export interface FlexProps {
  direction?: string
  align?: string
  justify?: string
  gap?: string
  fwrap?: boolean
  width?: string
  flex?: string
  p?: string
  px?: string
  py?: string
  pl?: string
  pr?: string
  pt?: string
  pb?: string
  onClick?: React.MouseEventHandler<HTMLDivElement>
  ref?: React.MutableRefObject<undefined>
}

const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  align-items: ${({ align }) => align || 'flex-start'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  gap: ${({ gap }) => gap || '0'};
  flex-wrap: ${({ fwrap }) => (fwrap ? 'wrap' : 'unset')};
  width: ${({ width }) => width || '100%'};
  padding: ${({ p, px, py, pl, pr, pt, pb }) =>
    get_padding_sizes({ p, px, py, pl, pr, pt, pb })};

  ${({ flex }) => (flex ? `& > * {flex: ${flex};}` : '')}
`

export default Flex
