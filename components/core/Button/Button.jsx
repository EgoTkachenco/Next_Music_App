import React from 'react'
import styled from 'styled-components'
import theme from '@/styles/theme'
import { get_font, get_color } from '@/styles/utils'

const ButtonCore = styled.button`
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

  font-family: ${(props) => get_font(props.font)};
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  padding: ${(props) => props.padding};

  svg {
    cursor: pointer;
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
  background: ${(props) => props.color};
  color: #ffffff;
  font-weight: 600;
  &:hover {
    background: transparent;
    border-color: ${(props) => props.color};
    color: ${(props) => props.color};

    path {
      fill: ${(props) => props.color};
    }
  }

  &:active {
    background: rgba(0, 0, 0, 0.1);
  }
`
const ButtonOutlineCore = styled(ButtonCore)`
  border-color: ${(props) => props.color};
  color: ${(props) => props.color};
  background: transparent;
  font-weight: 600;

  &:hover {
    background: ${(props) => props.color};
    color: #ffffff;

    path {
      fill: #ffffff;
    }
  }
  &:active {
    background: rgba(0, 0, 0, 0.1);
    border-color: ${(props) => props.color};
    color: ${(props) => props.color};
    /* transform: scale(1.02); */
  }
`
const ButtonTextCore = styled(ButtonCore)`
  background: transparent;
  border-radius: 30px;
  color: ${(props) => props.color};
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
    background: ${(props) => props.color};
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
  max-width: ${(props) => props.height};
  min-width: ${(props) => props.height};
  padding: 0;
  height: ${(props) => props.height};
  background: ${(props) => props.color};
  border-radius: 50%;
  svg {
    cursor: pointer;
  }
  path {
    fill: white;
  }

  &:hover {
    background: transparent;
    border-color: ${(props) => props.color};
    color: ${(props) => props.color};

    path {
      fill: ${(props) => props.color};
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

const getVariant = (variant) => variants[variant] || ButtonFlatCore

const getSize = (size = 'medium') => theme.buttons.sizes[size]

const Button = React.forwardRef(function Button(
  { variant, color, text, outline, font, children, ...props },
  ref
) {
  const sizesProps = getSize(props.size)
  delete props.size

  let ButtonTemplate = ButtonCore
  if (variant) ButtonTemplate = getVariant(variant)
  else if (outline) ButtonTemplate = ButtonOutlineCore
  else if (text) ButtonTemplate = ButtonTextCore
  else ButtonTemplate = ButtonFlatCore

  return (
    <ButtonCore
      ref={ref}
      as={ButtonTemplate}
      {...props}
      {...sizesProps}
      color={get_color(color || 'primary')}
      font={font || 'monospace'}
      type={props.type || 'button'}
    >
      {children}
    </ButtonCore>
  )
})

export default Button
