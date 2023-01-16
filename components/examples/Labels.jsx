import { Chip, Flex } from '../core'

const Labels = () => {
  return (
    <Flex gap="8px">
      <Chip color="primary">Primary Chip</Chip>
      <Chip color="success">Success Chip</Chip>
      <Chip color="danger">Danger Chip</Chip>
    </Flex>
  )
}

export default Labels
