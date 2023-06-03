import type { GetServerSidePropsContext, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import i18config from '../../i18next-scanner.config'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import ContactDivider from '../components/ContactDivider'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'

// components

// static props
export const getStaticProps = async ({ locale }: GetServerSidePropsContext) => {
	return {
		props: {
			...(await serverSideTranslations(locale as string, i18config.options.ns))
		}
	}
}

// Home component
const Home: NextPage = () => {
	const [t] = useTranslation()

	return (
		<>
			<Head>
				{/* Primary Meta Tags */}
				<title>{t('website-title')}</title>
				<meta name='title' content={t('website-title')} />
				<meta name='description' content={t('website-description')} />
				<meta name='keywords' content={t('website-keywords')} />
				<meta name='robots' content='index, follow' />

				{/* Open Graph / Facebook */}
				<meta property='og:type' content='website' />
				<meta property='og:url' content={t('website-url')} />
				<meta property='og:title' content={t('website-title')} />
				<meta property='og:description' content={t('website-description')} />
				<meta property='og:image' content='/images/logo-mobile.png' />

				{/* Twitter */}
				<meta property='twitter:card' content='summary_large_image' />
				<meta property='twitter:url' content={t('website-url')} />
				<meta property='twitter:title' content={t('website-title')} />
				<meta property='twitter:description' content={t('website-description')} />
				<meta property='twitter:image' content='/images/logo-mobile.png' />

				{/* Icons */}
				<link rel='icon' type='image/png' href='/favicon-32x32.png' />
				<link rel='icon' type='image/png' href='/favicon-16x16.png' />
				<link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />

				{/* Canonical */}
				<link rel='canonical' href={t('website-canonical-url')} />

				{/* Viewport */}
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<Header />
			<Hero />
			<About />
			<ContactDivider />
			<Gallery />
			<Contact />
			<ContactDivider />
		</>
	)
}

export default Home
