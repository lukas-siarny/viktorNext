module.exports = {
	input: ['src/**/*.{ts,tsx}'],
	output: './',
	options: {
		debug: false,
		func: {
			list: ['t'],
			extensions: ['.js', '.jsx', '.ts', '.tsx']
		},
		sort: true,
		trans: false,
		removeUnusedKeys: true,
		lngs: ['sk', 'en'],
		ns: ['loc'],
		defaultLng: 'sk',
		defaultNs: 'loc',
		defaultValue: '_NEPRELOZENE_',
		resource: {
			loadPath: 'public/locales/{{lng}}/{{ns}}.json',
			savePath: 'public/locales/{{lng}}/{{ns}}.json',
			jsonIndent: 4,
			lineEnding: '\n'
		},
		nsSeparator: ':',
		keySeparator: '|'
	}
}
