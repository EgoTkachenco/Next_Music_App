import styled from 'styled-components'
import theme from '@/styles/theme'
import Flex from '../Flex'
import Label from './Label'
import { useState, useEffect } from 'react'

export default function Checkbox({
  name,
  value,
  onChange = () => {},
  label,
  size = 'medium',
}) {
  const [state, setState] = useState(false)
  useEffect(() => {
    setState(!!value)
  }, [value])
  const handleChange = (newValue) => {
    setState(newValue)
    onChange(newValue)
  }
  return (
    <Flex align="center" onClick={() => handleChange(!state)} gap="8px">
      <Box size={size}>
        <Value active={!!state} />
      </Box>
      <Label color="gray">{label}</Label>
    </Flex>
  )
}

const Box = styled.div`
  border: 1px solid ${theme.colors.dark};
  border-radius: 8px;
  width: ${(props) => theme.forms.checkbox.sizes[props.size]};
  height: ${(props) => theme.forms.checkbox.sizes[props.size]};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    border-color: ${theme.colors.primary};
  }
`
const Value = styled.div`
  width: 50%;
  height: 25%;
  transform: rotate(-45deg) translate(2px, -1px);
  transition: all 0.3s;
  border: 2px solid transparent;
  border-color: ${(props) =>
    props.active ? theme.colors.primary : 'transparent'};
  border-right: none;
  border-top: none;
`
