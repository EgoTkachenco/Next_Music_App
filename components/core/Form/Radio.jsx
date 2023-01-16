import styled from 'styled-components'
import theme from '@/styles/theme'
import Flex from '../Flex'
import Label from './Label'
import { useState, useEffect } from 'react'

export default function Radio({
  name,
  value,
  onChange = () => {},
  label,
  options,
  direction = 'column',
  size = 'medium',
}) {
  const [state, setState] = useState('')
  useEffect(() => {
    setState(value)
  }, [value])
  const handleChange = (newValue) => {
    setState(newValue)
    onChange(newValue)
  }
  return (
    <Flex direction={direction} align="center" gap="8px">
      {options.map((option, i) => (
        <RadioElement
          key={`${option}-${i}`}
          label={option}
          value={state === option}
          onChange={() => handleChange(option)}
          size={size}
        />
      ))}
    </Flex>
  )
}

const RadioElement = ({ value, label, onChange, size }) => {
  return (
    <Flex align="center" onClick={onChange} gap="8px">
      <Box size={size}>
        <Value active={value} />
      </Box>
      <Label caption color="gray">
        {label}
      </Label>
    </Flex>
  )
}

const Box = styled.div`
  border: 1px solid ${theme.colors.dark};
  border-radius: 50%;
  width: ${(props) => theme.forms.radio.sizes[props.size]};
  height: ${(props) => theme.forms.radio.sizes[props.size]};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  padding: 3px;

  &:hover {
    border-color: ${theme.colors.primary};
  }
`
const Value = styled.div`
  border-radius: 50%;
  width: ${(props) => (props.active ? '100%' : '0')};
  height: ${(props) => (props.active ? '100%' : '0')};
  transition: all 0.3s;
  background: ${(props) =>
    props.active ? theme.colors.primary : 'transparent'};
`
