import globals from 'globals';
import pluginJs from '@eslint/js';
import googleConfig from 'eslint-config-google';

export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  pluginJs.configs.recommended,
  {
    ...googleConfig,
    rules: {
      ...googleConfig.rules,
      'valid-jsdoc': 'off',
      'require-jsdoc': 'off',
      'max-len': ['error', {code: 100}],
    },
  },
];
