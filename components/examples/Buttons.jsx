import { Button, Flex, Icon } from '../core'

const Buttons = () => {
  return (
    <Flex gap="8px" direction="column" width="100%" align="stretch">
      <Flex gap="8px">
        <Button color="primary">PRIMARY FLAT</Button>
        <Button color="primary" outline>
          PRIMARY OUTLINE
        </Button>
        <Button color="primary" text>
          PRIMARY TEXT
          <Icon icon="search" />
        </Button>
      </Flex>
      <Flex gap="8px">
        <Button color="success">SUCCESS FLAT</Button>
        <Button color="success" outline>
          SUCCESS OUTLINE
        </Button>
        <Button color="success" text>
          SUCCESS TEXT
        </Button>
      </Flex>
      <Flex gap="8px">
        <Button color="danger">DANGER FLAT</Button>
        <Button color="danger" outline>
          DANGER OUTLINE
        </Button>
        <Button color="danger" text>
          DANGER TEXT
        </Button>
      </Flex>
      <Flex gap="8px">
        <Button color="dark">DARK FLAT</Button>
        <Button color="dark" outline>
          DARK OUTLINE
        </Button>
        <Button color="dark" text>
          DARK TEXT
        </Button>
      </Flex>

      <Flex gap="8px">
        <Button variant="custom">CUSTOM</Button>
        <Button variant="icon">
          <Icon icon="close" />
        </Button>
      </Flex>
    </Flex>
  )
}

export default Buttons
