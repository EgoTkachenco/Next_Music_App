import styled from 'styled-components'
import theme from '@/styles/theme'
import { Color, Font, TextVariant } from '@/styles/utils'

interface TextProps {
  font: Font
  color: Color
  align: 'left' | 'center' | 'right'
}

interface VariantTextProps extends TextProps {
  type: TextVariant
  inline?: boolean
}

const defaultProps = (props: TextProps): TextProps => ({
  font: props.font || 'primary',
  color: props.color || 'dark',
  align: props.align || 'initial',
})

const defaultStyles = ({ font, color, align }: TextProps): string => `
	font-family: ${theme.fonts[font]};
	color: ${theme.colors[color]};
	text-align: ${align};
`

const variantStyles = (type: TextVariant): string => `
	font-size: ${theme.typographic[type].size};
	line-height: ${theme.typographic[type].height};
	font-weight: ${theme.typographic[type].weight};
`

export const H1 = styled.h1.attrs(defaultProps)<VariantTextProps>`
  ${({ font, color, align }) => defaultStyles({ font, color, align })}
  ${variantStyles('h1')}
`

export const H2 = styled.h2.attrs(defaultProps)<VariantTextProps>`
  ${({ font, color, align }) => defaultStyles({ font, color, align })}
  ${variantStyles('h2')}
`

export const H3 = styled.h3.attrs(defaultProps)<VariantTextProps>`
  ${({ font, color, align }) => defaultStyles({ font, color, align })}
  ${variantStyles('h3')}
`

export const H4 = styled.h4.attrs(defaultProps)<VariantTextProps>`
  ${({ font, color, align }) => defaultStyles({ font, color, align })}
  ${variantStyles('h4')}
`

export const H5 = styled.h5.attrs(defaultProps)<VariantTextProps>`
  ${({ font, color, align }) => defaultStyles({ font, color, align })}
  ${variantStyles('h5')}
`

export const H6 = styled.h6.attrs(defaultProps)<VariantTextProps>`
  ${({ font, color, align }) => defaultStyles({ font, color, align })}
  ${variantStyles('h6')}
`

export const Link = styled.div.attrs(defaultProps)<VariantTextProps>`
  ${({ font, color, align }) => defaultStyles({ font, color, align })}
  ${variantStyles('link')}
  display: ${({ inline }) => (inline ? 'inline' : 'block')};
  cursor: pointer;
`

export const Caption = styled.div.attrs(defaultProps)<VariantTextProps>`
  ${({ font, color, align }) => defaultStyles({ font, color, align })}
  ${variantStyles('caption')}
  display: ${({ inline }) => (inline ? 'inline' : 'block')};

  ${Link} {
    ${variantStyles('caption')}
    display: ${({ inline }) => (inline ? 'inline' : 'block')};
  }
`

export const Text = styled.div.attrs(defaultProps)<VariantTextProps>`
  ${({ font, color, align }) => defaultStyles({ font, color, align })}
  ${variantStyles('text')}
  display: ${({ inline }) => (inline ? 'inline' : 'block')};

  ${Link} {
    ${variantStyles('text')}
    display: ${({ inline }) => (inline ? 'inline' : 'block')};
  }
`
