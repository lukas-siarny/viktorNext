module.exports = {
	extends: ['@goodrequest/eslint-config-typescript-react'],
	parserOptions: {
		project: 'tsconfig.eslint.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module'
	},
	rules: {
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-empty-interface': 'off',
		'react-hooks/rules-of-hooks': 'off',
		'react/jsx-no-useless-fragment': 'off',
		'eslint-disable-next-line import/no-extraneous-dependencies': 'off',
		'eslint-disable-next-line import/no-absolute-path': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',
		'jsx-a11y/anchor-is-valid': 'warn',
		'no-return-assign': 'warn',

		'react/no-danger': 'off',
		'react/react-in-jsx-scope': 'off'
	}
}
