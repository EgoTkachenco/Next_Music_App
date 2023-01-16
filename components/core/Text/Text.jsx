import styled from 'styled-components'
import { get_text_styles } from '@/styles/utils'

export const H1 = styled.h1`
  ${(props) => get_text_styles(props, 'h1')}
`
export const H2 = styled.h2`
  ${(props) => get_text_styles(props, 'h2')}
`

export const H3 = styled.h3`
  ${(props) => get_text_styles(props, 'h3')}
`

export const H4 = styled.h4`
  ${(props) => get_text_styles(props, 'h4')}
`

export const H5 = styled.h5`
  ${(props) => get_text_styles(props, 'h5')}
`

export const H6 = styled.h6`
  ${(props) => get_text_styles(props, 'h6')}
`

export const Link = styled.div`
  ${(props) => get_text_styles(props, 'link')}
  display: ${(props) => (props.inline ? 'inline' : 'block')};
  text-decoration: underline;
  cursor: pointer;
`

export const Caption = styled.div`
  ${(props) => get_text_styles(props, 'caption')}
  display: ${(props) => (props.inline ? 'inline' : 'block')};
  ${Link} {
    ${(props) => get_text_styles(props, 'caption')}
    display: ${(props) => (props.inline ? 'inline' : 'block')};
  }
`

export const Text = styled.div`
  ${(props) => get_text_styles(props, 'text')}
  ${(props) => (props.inline ? 'inline' : 'block')};
  ${Link} {
    ${(props) => get_text_styles(props, 'text')}
    display: ${(props) => (props.inline ? 'inline' : 'block')};
  }
`
