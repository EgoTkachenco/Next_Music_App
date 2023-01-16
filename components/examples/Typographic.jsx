import { Flex, H1, H2, H3, H4, H5, H6, Text, Caption, Link } from '../core'

const Typographic = () => {
  return (
    <Flex gap="8px" direction="column">
      <H1>Heading H1</H1>
      <H2>Heading H2</H2>
      <H3>Heading H3</H3>
      <H4>Heading H4</H4>
      <H5>Heading H5</H5>
      <H6>Heading H6</H6>
      <Text>Default Text</Text>
      <Text color="primary">Default Primary Text</Text>
      <Text color="secondary">Default Secondary Text</Text>
      <Text color="success">Default Success Text</Text>
      <Text color="danger">Default Danger Text</Text>
      <Text font="secondary">Default Sans Text</Text>
      <Text font="monospace">Default Monospace Text</Text>
      <Text weight="bold">Default Bold Text</Text>
      <Caption>Caption Text</Caption>
      <Link>Link Text</Link>
    </Flex>
  )
}

export default Typographic
