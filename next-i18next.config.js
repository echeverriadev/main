const path = require('path');

module.exports = {
	i18n: {
		defaultLocale: 'es',
		locales: ['en', 'es'],
    localeDetection: false,
	},
  localePath: path.resolve('./src/locales'),
  ns: ['common'],
}
