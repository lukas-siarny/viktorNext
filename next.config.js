const { i18n } = require('./next-i18next.config')
const { withSentryConfig } = require('@sentry/nextjs')

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	i18n,

	env: {
		SIGNUP_URL: process.env.SIGNUP_URL,
		SALES_FORM_URL: process.env.SALES_FORM_URL,
		GTM_ID: process.env.GTM_ID,
		SENTRY_DSN: process.env.SENTRY_DSN,
		SENTRY_ENV: process.env.SENTRY_ENV,
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
	},

	sentry: {
		// Use `hidden-source-map` rather than `source-map` as the Webpack `devtool`
		// for client-side builds. (This will be the default starting in
		// `@sentry/nextjs` version 8.0.0.) See
		// https://webpack.js.org/configuration/devtool/ and
		// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/#use-hidden-source-map
		// for more information.
		hideSourceMaps: true
	}
}

const sentryWebpackPluginOptions = {
	// Additional config options for the Sentry Webpack plugin. Keep in mind that
	// the following options are set automatically, and overriding them is not
	// recommended:
	//   release, url, org, project, authToken, configFile, stripPrefix,
	//   urlPrefix, include, ignore

	silent: false // Suppresses all logs
	// For all available options, see:
	// https://github.com/getsentry/sentry-webpack-plugin#options.
}

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions)
