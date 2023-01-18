import { useText, useLang, langs } from '@/locales'
import { Flex, Text, Button } from '@core/'

const Translations = () => {
  const t = useText()
  const { setLang } = useLang()

  return (
    <Flex gap="8px" fwrap>
      <Text>{t('January')}</Text>
      <Text>{t('February')}</Text>
      <Text>{t('March')}</Text>
      <Text>{t('April')}</Text>
      <Text>{t('May')}</Text>
      <Text>{t('June')}</Text>
      <Text>{t('July')}</Text>
      <Text>{t('August')}</Text>
      <Text>{t('September')}</Text>
      <Text>{t('October')}</Text>
      <Text>{t('November')}</Text>
      <Text>{t('December')}</Text>
      {langs.map((l) => (
        <Button key={l} onClick={() => setLang(l)}>
          {t('ChangeLanguage')} {l}
        </Button>
      ))}
    </Flex>
  )
}

export default Translations
