import Flex, { FlexProps } from '../Flex/Flex'
import styled from 'styled-components'
import { Color } from '@/styles/utils'
import theme from 'styles/theme'

interface CardProps extends FlexProps {
  color?: Color
  rounded?: boolean
  bordered?: boolean
  shadowed?: boolean
}

const Card = styled(Flex).attrs((props: CardProps) => ({
  p: props.p || theme.card.default_padding,
  direction: props.direction || 'column',
}))<CardProps>`
  overflow: hidden;
  box-shadow: ${({ shadowed }) => (shadowed ? theme.card.default_shadow : '')};
  border-radius: ${({ rounded }) =>
    rounded ? theme.card.default_radius : '0'};
  background: ${({ bordered, color }) =>
    color && !bordered ? theme.colors[color] : ''};

  ${({ bordered, color }) =>
    bordered
      ? `border: 1px solid ${color ? theme.colors[color] : theme.colors.dark}`
      : ''};
`

export default Card
