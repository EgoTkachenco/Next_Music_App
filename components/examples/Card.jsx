import { Flex, Card, H3, Text, Caption, Button, Icon } from '../core'

const Cards = () => {
  return (
    <Flex gap="8px" fwrap flex="0 1 calc(50% - 8px)" align="stretch">
      <Card gap="16px" color="grey">
        <H3>Title</H3>
        <Caption color="danger">Warning text</Caption>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          voluptatum obcaecati possimus officiis, quaerat consequatur quam
          ducimus? Sint corporis commodi esse, voluptate, sapiente dolor veniam,
          harum eos magnam doloremque necessitatibus!
        </Text>
      </Card>

      <Card gap="16px" color="dark">
        <H3 color="white" font="monospace">
          Title
        </H3>
        <Caption color="danger" font="monospace" weight="bold">
          Warning text
        </Caption>
        <Text color="white" font="monospace">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          voluptatum obcaecati possimus officiis, quaerat consequatur quam
          ducimus? Sint corporis commodi esse, voluptate, sapiente dolor veniam,
          harum eos magnam doloremque necessitatibus!
        </Text>
      </Card>
      <Card bordered p="0" color="primary">
        <img
          src="https://images.pexels.com/photos/14019566/pexels-photo-14019566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="illustration"
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
          }}
        />
        <Card gap="8px">
          <H3>Bordered card</H3>
          <Caption color="danger" weight="bold">
            Warning text
          </Caption>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            voluptatum obcaecati possimus officiis, quaerat consequatur quam
            ducimus? Sint corporis commodi esse, voluptate, sapiente dolor
            veniam, harum eos magnam doloremque necessitatibus!
          </Text>
        </Card>
      </Card>

      <Card gap="8px" bordered rounded>
        <H3>Bordered rounded card</H3>
        <Caption color="danger" weight="bold">
          Warning text
        </Caption>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          voluptatum obcaecati possimus officiis, quaerat consequatur quam
          ducimus? Sint corporis commodi esse, voluptate, sapiente dolor veniam,
          harum eos magnam doloremque necessitatibus!
        </Text>
      </Card>
      <Card bordered shadowed p="0">
        <img
          src="https://images.pexels.com/photos/14963648/pexels-photo-14963648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="illustration"
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
          }}
        />
        <Card gap="8px">
          <H3>Bordered card with shadow</H3>
          <Caption color="danger" weight="bold">
            Warning text
          </Caption>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            voluptatum obcaecati possimus officiis, quaerat consequatur quam
            ducimus? Sint corporis commodi esse, voluptate, sapiente dolor
            veniam, harum eos magnam doloremque necessitatibus!
          </Text>
          <Flex justify="flex-end" width="100%">
            <Button color="dark" width="auto">
              <Icon icon="eye" color="white" size="24px" />
              READ
            </Button>
          </Flex>
        </Card>
      </Card>

      <Card rounded shadowed p="0">
        <img
          src="https://images.pexels.com/photos/3223390/pexels-photo-3223390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="illustration"
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
          }}
        />
        <Card gap="8px">
          <H3>Rounded card with shadow</H3>
          <Caption color="danger" weight="bold">
            Warning text
          </Caption>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            voluptatum obcaecati possimus officiis, quaerat consequatur quam
            ducimus? Sint corporis commodi esse, voluptate, sapiente dolor
            veniam, harum eos magnam doloremque necessitatibus!
          </Text>
          <Button color="dark" font="primary">
            Show more
          </Button>
        </Card>
      </Card>
    </Flex>
  )
}

export default Cards
