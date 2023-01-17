import styled from 'styled-components'
import { Caption } from '../Text'

const InputError = styled(Caption)<{ show: boolean }>`
  transition: all 0.3s;
  padding: 0 0 0 20px;
  opacity: ${({ show }) => (show ? '1' : '0')};
`

export default InputError
