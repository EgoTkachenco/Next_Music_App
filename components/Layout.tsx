import styled from 'styled-components'
import { Card } from '@core'
const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <Wrapper color="gray">
      <Content>{children}</Content>
    </Wrapper>
  )
}

export default Layout

const Wrapper = styled(Card)`
  min-height: 100vh;
  align-items: center;
  padding: 64px 32px;
`

const Content = styled.div`
  max-width: 1200px;
  width: 100%;
`
