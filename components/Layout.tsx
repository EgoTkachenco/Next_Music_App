import styled from 'styled-components'
import { Card } from '@core'
import Header from './Header'

const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <Wrapper color="dark" align="center">
      <Header />
      <Content>{children}</Content>
    </Wrapper>
  )
}

export default Layout

const Wrapper = styled(Card)`
  min-height: 100vh;
  padding: 0;
`

const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 64px 32px;
  @media (max-width: 600px) {
    padding: 32px 16px;
  }
`
