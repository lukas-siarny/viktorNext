import { GetServerSidePropsContext, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import i18config from '../../i18next-scanner.config'

export const getStaticProps = async ({ locale }: GetServerSidePropsContext) => {
	return {
		props: {
			...(await serverSideTranslations(locale as string, i18config.options.ns))
		}
	}
}

// Home component
const NotFoundPage: NextPage = () => {
	const { t } = useTranslation()

	return (
		<div className={'flex h-screen items-center bg-gray-light'}>
			<div className={'container mx-auto flex h-full flex-col items-center justify-center gap-4 bg-white shadow-md md:h-4/5'}>
				<h2 className={'text-[8rem] font-black leading-none text-neutral-500 md:text-[12rem] lg:text-[16rem]'}>500</h2>
				<h3 className={'text-4xl font-bold'}>{t('500-oops')}</h3>
				<h4>{t('500-something-went-wrong')}</h4>
			</div>
		</div>
	)
}

export default NotFoundPage
