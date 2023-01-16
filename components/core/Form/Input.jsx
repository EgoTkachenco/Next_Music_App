import styled from 'styled-components'
import InputError from './InputError'
import Flex from '../Flex'
import theme from '@/styles/theme'
import { useState, useEffect } from 'react'
import TextField from './TextField'

export default function Input({
  id,
  name,
  value,
  onChange = () => {},
  placeholder,
  error,
  rightSlot,
  leftSlot,
  type,
  validate = () => true,
  isRead,
  variant,
}) {
  const [state, setState] = useState({ value: '', focused: false })
  useEffect(() => {
    setState({ ...state, value })
  }, [value])
  const handleChange = (newValue) => {
    setState({ ...state, value: newValue })
    onChange(newValue)
  }
  const onFocus = () => setState({ ...state, focused: true })
  const onBlur = () => setState({ ...state, focused: false })

  return (
    <Flex direction="column">
      <TextField
        type={variant}
        focused={state.focused}
        leftSlot={leftSlot}
        rightSlot={rightSlot}
      >
        <InputField
          id={id}
          name={name}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          placeholder={placeholder}
          type={type}
          readOnly={isRead}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </TextField>
      <InputError color="danger" show={!!error}>
        {error}
      </InputError>
    </Flex>
  )
}

export const InputField = styled.input`
  flex-grow: 1;
  height: 100%;
  font-family: ${theme.fonts.primary};
  font-weight: 400;
  font-size: ${theme.typographic.caption.size};
  line-height: ${theme.typographic.caption.height};
  color: ${theme.colors.dark};

  transition: all 0.3s;
  background: #ffffff;
  border: none;

  &:first-child {
    color: #464f60 !important;
  }

  &::placeholder {
    color: ${theme.colors.gray};
  }

  &:focus {
    outline: none;
    font-size: ${theme.typographic.text.size};
    line-height: ${theme.typographic.text.height};
  }
`
