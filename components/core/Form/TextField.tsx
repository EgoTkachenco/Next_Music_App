import styled from 'styled-components'
import theme from '@/styles/theme'
import React from 'react'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: all 0.3s;
`

const OutlinedWrapper = styled(Wrapper)<{ focused: boolean }>`
  border-radius: 8px;
  padding: 0 16px;
  border: 1px solid
    ${({ focused }) => (focused ? theme.colors.primary : theme.colors.dark)};
`

const UnderlinedWrapper = styled(Wrapper)<{ focused: boolean }>`
  padding: 0 8px;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 100%;
    background: ${theme.colors.dark};
  }
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: ${({ focused }) => (focused ? '100%' : '0')};
    background: ${theme.colors.primary};
    transition: all 0.6s;
  }
`

const textFieldVariants = {
  underline: UnderlinedWrapper,
  outline: OutlinedWrapper,
}

export type TextFieldVariant = keyof typeof textFieldVariants

interface TextFieldProps {
  type?: TextFieldVariant
  rightSlot?: JSX.Element
  leftSlot?: JSX.Element
  children: JSX.Element
  focused: boolean
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

const TextField = ({
  type = 'outline',
  leftSlot,
  rightSlot,
  children,
  focused = false,
  onClick = () => {},
}: TextFieldProps) => {
  return (
    <Wrapper as={textFieldVariants[type]} focused={focused} onClick={onClick}>
      <InputFieldLeftSlot>{leftSlot}</InputFieldLeftSlot>
      {children}
      <InputFieldRightSlot>{rightSlot}</InputFieldRightSlot>
    </Wrapper>
  )
}

export default TextField

const InputFieldLeftSlot = styled.div``

const InputFieldRightSlot = styled.div``
