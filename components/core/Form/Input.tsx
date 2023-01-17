import styled from 'styled-components'
import InputError from './InputError'
import Flex from '../Flex'
import theme from '@/styles/theme'
import { useState, useEffect } from 'react'
import TextField, { TextFieldVariant } from './TextField'

interface InputProps {
  id?: string
  name?: string
  value: string
  onChange?: (value: string) => void
  placeholder?: string
  error?: string
  type?: 'text' | 'password'
  isRead?: boolean

  variant: TextFieldVariant
  rightSlot?: JSX.Element
  leftSlot?: JSX.Element
}

export default function Input({
  id,
  name,
  value = '',
  onChange = () => {},
  placeholder,
  error,
  rightSlot,
  leftSlot,
  type,
  isRead,
  variant,
}: InputProps) {
  const [state, setState] = useState('')
  useEffect(() => {
    setState(value)
  }, [value])

  const handleChange = (newValue: string) => {
    setState(newValue)
    onChange(newValue)
  }

  const [focused, setFocused] = useState(false)
  const onFocus = () => setFocused(true)
  const onBlur = () => setFocused(false)

  return (
    <Flex direction="column">
      <TextField
        type={variant}
        focused={focused}
        leftSlot={leftSlot}
        rightSlot={rightSlot}
      >
        <InputField
          id={id}
          name={name}
          value={state}
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
