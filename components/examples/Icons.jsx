import { Flex, Icon } from '../core'

const Icons = () => {
  return (
    <Flex gap="8px" direction="row" fwrap>
      <Icon />
      <Icon icon="chevron" />
      <Icon icon="eye-hidden" />
      <Icon icon="eye" />
      <Icon icon="close" />
      <Icon icon="search" />
      <Icon icon="attachment" />
      <Icon icon="send" />
    </Flex>
  )
}

export default Icons
