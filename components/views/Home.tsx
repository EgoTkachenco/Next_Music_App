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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            vero nobis quaerat sit, tenetur omnis sequi laudantium nemo quam quo
            expedita officia eos aliquid quia odio voluptatum saepe vel beatae.
          </Text>

          <Pad />
        </Flex>
      </Layout>
    </>
  )
}

export default HomeView

export async function getStaticProps() {
  return { props: {} }
}
