import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'

// global styles
import '../styles/globals.css'

// MyApp component
function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}

export default appWithTranslation(MyApp)
