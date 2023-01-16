import styled from 'styled-components'
import theme from '@/styles/theme'

const get_type = (type) => {
  switch (type) {
    case 'underline':
      return UnderlinedWrapper
    default:
      return OutlinedWrapper
  }
}

const TextField = ({ type, leftSlot, rightSlot, children, ...props }) => {
  return (
    <Wrapper as={get_type(type)} {...props}>
      <InputFieldLeftSlot>{leftSlot}</InputFieldLeftSlot>
      {children}
      <InputFieldRightSlot>{rightSlot}</InputFieldRightSlot>
    </Wrapper>
  )
}

export default TextField

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: all 0.3s;
`

const OutlinedWrapper = styled(Wrapper)`
  border-radius: 8px;
  padding: 0 16px;
  border: 1px solid
    ${(props) => (props.focused ? theme.colors.primary : theme.colors.dark)};
`

const UnderlinedWrapper = styled(Wrapper)`
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
    width: ${(props) => (props.focused ? '100%' : '0')};
    background: ${theme.colors.primary};
    transition: all 0.6s;
  }
`

const InputFieldLeftSlot = styled.div``

const InputFieldRightSlot = styled.div``
