const config = require('./eslint.src');

config.globals = {};
(config.rules['no-var'] = 'off'), (config.rules['prefer-const'] = 'off');

module.exports = config;
