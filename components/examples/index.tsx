import { ReactNode } from 'react'
import { Flex, H2 } from '@core/'
import Card from './Card'
import Form from './Form'
import Labels from './Labels'
import Typographic from './Typographic'
import Buttons from './Buttons'
import styled from 'styled-components'

const Examples = () => {
  return (
    <Wrapper direction="column" width="auto">
      <Example name="Typography">
        <Typographic />
      </Example>

      <Example name="Buttons">
        <Buttons />
      </Example>

      <Example name="Forms">
        <Form />
      </Example>

      <Example name="Cards">
        <Card />
      </Example>

      <Example name="Labels">
        <Labels />
      </Example>

      {/* <Example name="Modal"></Example>

      <Example name="Table"></Example> */}
    </Wrapper>
  )
}

export default Examples

const Wrapper = styled(Flex)`
  min-height: 100vh;
  margin: 32px 64px;
  border: 2px solid #ccc;
  border-radius: 16px;
`

const Row = styled(Flex)`
  border-bottom: 2px solid #ccc;

  &:last-child {
    border-bottom: transparent;
  }
`
const Title = styled(Flex)`
  border-right: 2px solid #ccc;
`

const Example = ({ name, children }: { name: string; children: ReactNode }) => {
  return (
    <Row width="100%" align="stretch">
      <Title width="35%" justify="center" align="center">
        <H2>{name}</H2>
      </Title>
      <Flex width="75%" p="32px">
        {children}
      </Flex>
    </Row>
  )
}
