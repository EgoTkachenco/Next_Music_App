import { useText } from '@/locales'

export interface MetadataParams {
  title: string
  description: string
  siteName: string
}

export const renderMetaData = ({
  title,
  description,
  siteName,
}: MetadataParams) => {
  return (
    <>
      <title>{title}</title>
      <meta property="og:site_name" content={siteName} />
      <meta itemProp="og:title" content={title} />
      <meta itemProp="name" content={title} />

      <meta name="description" content={description} />
      <meta itemProp="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="twitter:description" content={description} />
    </>
  )
}

export function useMetadataRenderer() {
  const t = useText()
  return ({ title, description }: Partial<MetadataParams>) => {
    return renderMetaData({
      title: title || t('siteName'),
      description: description || t('siteDescription'),
      siteName: t('siteName'),
    })
  }
}
