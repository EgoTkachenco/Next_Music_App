import Head from 'next/head'
import { useMetadataRenderer } from '@/hooks'
import Examples from '@/components/examples'

const ExamplesView = () => {
  const renderMetadata = useMetadataRenderer()
  return (
    <>
      <Head>{renderMetadata({})}</Head>
      <Examples />
    </>
  )
}

export default ExamplesView

export async function getStaticProps() {
  return { props: {} }
}
