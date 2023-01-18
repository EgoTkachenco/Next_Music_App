import { useRouter } from 'next/router'
import en from './en.json'
import ua from './ua.json'

const translations = {
  en,
  ua,
}

export type Lang = keyof typeof translations

export const defaultLang: Lang = process.env.NEXT_PUBLIC_DEFAULT_LANG as Lang || 'ua'

export const langs = Object.keys(translations)

const defaultLangTexts = translations[defaultLang]

export type Texts = typeof defaultLangTexts

export type TextKeys = keyof Texts

export const useLang = (): {lang: Lang, setLang: (lang: Lang) => void} => {
  const router = useRouter()
	const langId = router.query.lang as Lang 
	const setLang = (lang: Lang) => {
    let langPath = defaultLang === lang ? '' : lang
    const newRoute =
      router.route.search('lang') !== -1
        ? router.route.replace('[lang]', langPath)
				: '/' + langPath
		
		console.log(newRoute)
    router.push(newRoute)
  }
	const lang: Lang = langId || defaultLang 
  return { lang, setLang }
}
export const useText = () => {
  const { lang } = useLang()
	return (key: TextKeys) => {
		const t = translations[lang][key] || translations[defaultLang][key]
		if(!t) console.warn('Wrong translation key:', key)
		return t
	}
}