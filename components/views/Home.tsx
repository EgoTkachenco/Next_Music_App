import Head from 'next/head'
import { useMetadataRenderer } from '@/hooks'
import Layout from '../Layout'
import { H2, Text, Flex } from '@core'
import Pad from '../pad'
import styled from 'styled-components'

const HomeView = () => {
  const renderMetadata = useMetadataRenderer()
  return (
    <>
      <Head>{renderMetadata({})}</Head>
      <Layout>
        <Wrapper gap="32px">
          <Flex gap="16px" direction="column" width="500px">
            <H2 color="white">Web Music Pad</H2>
            <Text color="white">
              Each one box below contains a small piece of music. Click a box to
              turn it on or off.
            </Text>
            <Text color="white">
              After playing with these boxes for a while, you`ll discover
              certain combinations that you like. Many types of music are
              created in exactly this way — by mixing and matching small musical
              ideas to make interesting combinations.
            </Text>
          </Flex>
          <Pad />
        </Wrapper>
      </Layout>
    </>
  )
}

export default HomeView

export async function getStaticProps() {
  return { props: {} }
}

const Wrapper = styled(Flex)`
  height: 100%;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`
