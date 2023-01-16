import styled from 'styled-components'
import Card from '../Card'
import { Caption } from '../Text'
import { get_color, hex_to_rgba } from '@/styles/utils'

const Chip = ({ color, children }) => {
  const primaryColor = get_color(color)
  const secondaryColor = hex_to_rgba(get_color(color), 0.2)
  return (
    <ChipWrapper primary={primaryColor} secondary={secondaryColor} p="8px">
      <Caption color={color}>{children}</Caption>
    </ChipWrapper>
  )
}

const ChipWrapper = styled(Card)`
  border-radius: 8px;
  border: 1px solid transparent;
  border-color: ${(props) => props.primary};
  color: ${(props) => props.primary};
  background: ${(props) => props.secondary};
  width: auto;
`

export default Chip
