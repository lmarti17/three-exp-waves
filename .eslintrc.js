module.exports = {
	root: true,
	parserOptions: {
		sourceType: 'module',
	},
	extends: 'airbnb-base',
	plugins: [
		'html',
		'import',
	],
	rules: {
		'import/no-unresolved': 0,
		'import/prefer-default-export': 0,
		'indent': [2, 'tab'],
		'no-underscore-dangle': ['error', { 'allowAfterThis': true }],
		'padded-blocks': [2, 'always'],
		'func-names': 0,
		'no-console': 0,
		'no-param-reassign': 0,
		'max-len': ["error", 160, 4],
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
	},
	env: {
		browser: true,
		node: true
	},
	globals: {
		"google": true,
	},
	parserOptions: {
		ecmaFeatures: {
			experimentalObjectRestSpread: true
		}
	}
}
