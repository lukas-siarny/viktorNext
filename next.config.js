const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	i18n,

	env: {
		NEXT_APP_VERSION: process.env.NEXT_APP_VERSION
	},

	images: {
		minimumCacheTTL: 31536000 // cachovanie obrazka na 1 rok
	},

	// svgs -> react components (https://react-svgr.com/docs/next)
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack']
		})

		return config
	}
}

module.exports = nextConfig
