import styled from 'styled-components'
import { get_text_styles } from '@/styles/utils'

const Label = styled.label`
  ${(props) => get_text_styles(props, props.caption ? 'caption' : 'text')}
`

export default Label
