import Flex from '../Flex'
import styled from 'styled-components'
import { get_color } from '@/styles/utils'
import theme from 'styles/theme'

const Card = styled(Flex).attrs((props) => ({
  p: props.p || theme.card.default_padding,
  direction: props.direction || 'column',
}))`
  background: ${(props) => (props.bg ? get_color(props.bg) : '')};
  border-radius: ${(props) =>
    props.rounded ? theme.card.default_radius : '0'};
  overflow: hidden;
  ${(props) =>
    props.bordered ? `border: 1px solid ${theme.colors.dark}` : ''};

  ${(props) => (props.shadowed ? theme.card.default_shadow : '')};
`

export default Card
