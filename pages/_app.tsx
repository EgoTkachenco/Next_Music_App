import type { AppProps } from 'next/app'
import GlobalStyles from '@/styles/global'
// import theme from '@/styles/global'
// import { ThemeProvider } from 'styled-components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      {/* <ThemeProvider theme={theme}> */}
      <Component {...pageProps} />
      {/* </ThemeProvider> */}
    </>
  )
}
