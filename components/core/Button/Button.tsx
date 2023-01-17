import React, { ReactNode } from 'react'
import styled from 'styled-components'
import theme from '@/styles/theme'
import { Font, Color } from '@/styles/utils'

interface ButtonCoreProps {
  width: string
  height: string
  fontSize: string
  padding: string
  font: Font
  color: Color
}

const ButtonCore = styled.button<ButtonCoreProps>`
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  transition: all 0.3s;
  background: transparent;
  line-height: 120%;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 8px;

  font-family: ${({ font }) => theme.fonts[font]};
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  padding: ${(props) => props.padding};

  svg {
    cursor: pointer;
    fill: ${({ color }) => theme.colors[color]} !important;
  }

  path {
    transition: all 0.3s;
  }

  &:disabled {
    opacity: 0.8;
    cursor: default;
  }
`
const ButtonFlatCore = styled(ButtonCore)`
  background: ${({ color }) => theme.colors[color]};
  color: #ffffff;
  font-weight: 600;

  svg {
    fill: #ffffff;
  }

  &:hover {
    background: transparent;
    border-color: ${({ color }) => theme.colors[color]};
    color: ${({ color }) => theme.colors[color]};

    svg {
      fill: ${({ color }) => theme.colors[color]};
    }
  }

  &:active {
    background: rgba(0, 0, 0, 0.1);
  }
`
const ButtonOutlineCore = styled(ButtonCore)`
  border-color: ${({ color }) => theme.colors[color]};
  color: ${({ color }) => theme.colors[color]};
  background: transparent;
  font-weight: 600;

  &:hover {
    background: ${({ color }) => theme.colors[color]};
    color: #ffffff;

    svg {
      fill: #ffffff;
    }
  }
  &:active {
    background: rgba(0, 0, 0, 0.1);
    border-color: ${({ color }) => theme.colors[color]};
    color: ${({ color }) => theme.colors[color]};
  }
`
const ButtonTextCore = styled(ButtonCore)`
  background: transparent;
  border-radius: 30px;
  color: ${({ color }) => theme.colors[color]};
  font-weight: 600;
  padding: 0;
  transition: all 0.1s;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    transition: all 0.3s;
    background: ${({ color }) => theme.colors[color]};
  }

  &:hover {
    &:before {
      width: 100%;
    }
  }
  &:active {
    transform: scale(1.02);
  }
`
const CustomButton = styled(ButtonCore)`
  background: purple;
  color: #fff;
  font-weight: bold;

  &:hover {
    background: transparent;
    border-color: purple;
    color: purple;
  }

  &:active {
    background: rgba(0, 0, 0, 0.1);
    transform: scale(1.02);
  }
`
const IconButton = styled(ButtonCore)`
  max-width: ${({ height }) => height};
  min-width: ${({ height }) => height};
  padding: 0;
  height: ${({ height }) => height};
  background: ${({ color }) => theme.colors[color]};
  border-radius: 50%;
  svg {
    cursor: pointer;
  }
  path {
    fill: white;
  }

  &:hover {
    background: transparent;
    border-color: ${({ color }) => theme.colors[color]};
    color: ${({ color }) => theme.colors[color]};

    path {
      fill: ${({ color }) => theme.colors[color]};
    }
  }

  &:active {
    background: rgba(0, 0, 0, 0.1);
  }
`

// Variants for custom buttons
const variants = {
  custom: CustomButton,
  icon: IconButton,
}

enum ButtonVariants {
  custom = 'custom',
  icon = 'icon',
}

interface ButtonProps {
  variant?: ButtonVariants
  color?: keyof typeof theme.colors
  text?: boolean
  outline?: boolean
  font?: keyof typeof theme.fonts
  children?: ReactNode
  size?: keyof typeof theme.buttons.sizes
  type: 'button' | 'submit'
}

const Button = React.forwardRef(function Button(
  {
    variant,
    color = 'primary',
    text,
    outline,
    font = 'monospace',
    children,
    size = 'medium',
    type = 'button',
  }: ButtonProps,
  ref
) {
  let ButtonTemplate = ButtonFlatCore

  if (variant) ButtonTemplate = variants[variant]
  else if (outline) ButtonTemplate = ButtonOutlineCore
  else if (text) ButtonTemplate = ButtonTextCore

  return (
    <ButtonCore
      ref={ref}
      as={ButtonTemplate}
      color={color}
      font={font}
      type={type}
      // button size
      {...theme.buttons.sizes[size]}
    >
      {children}
    </ButtonCore>
  )
})

export default Button
