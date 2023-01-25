import styled from 'styled-components'
import { H5, Link, Flex } from '@core'
import theme from '@/styles/theme'

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <H5 color="white">Sounds games</H5>
        {/* <Flex align="center" width="auto">
          <Link color="white">About</Link>
        </Flex> */}
      </Content>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.header`
  height: 80px;
  width: 100%;
`

const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${theme.colors.white};
  padding: 0 16px;
`
