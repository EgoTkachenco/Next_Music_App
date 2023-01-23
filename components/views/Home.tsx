import Head from 'next/head'
import { useMetadataRenderer } from '@/hooks'
import Layout from '../Layout'
import { H2, Text, Flex } from '@core'
import Pad from '../pad'

const HomeView = () => {
  const renderMetadata = useMetadataRenderer()
  return (
    <>
      <Head>{renderMetadata({})}</Head>
      <Layout>
        <Flex gap="32px" direction="column">
          <H2 color="white">Web Music Pad Text</H2>
          <Text color="white">
            To get started, check out the boxes below. Each one contains a small
            piece of music. Click a box to turn it on or off.
          </Text>
          <Pad />
          <Text color="white">
            After playing with these boxes for a while, you`ll discover certain
            combinations that you like. Many types of music are created in
            exactly this way — by mixing and matching small musical ideas to
            make interesting combinations, and then changing those combinations
            over time..
          </Text>
        </Flex>
      </Layout>
    </>
  )
}

export default HomeView

export async function getStaticProps() {
  return { props: {} }
}
