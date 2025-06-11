// @ts-check
import eslintJs from '@eslint/js';
import eslintReact from '@eslint-react/eslint-plugin';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config({
  files: ['**/*.ts', '**/*.tsx'],

  extends: [
    eslintJs.configs.recommended,
    tseslint.configs.recommended,
    eslintReact.configs['recommended-typescript'],
    eslintConfigPrettier
  ],

  // Configure language/parsing options
  languageOptions: {
    // Use TypeScript ESLint parser for TypeScript files
    parser: tseslint.parser,
    parserOptions: {
      // Enable project service for better TypeScript integration
      projectService: true,
      tsconfigRootDir: import.meta.dirname
    }
  },

  // Custom rule overrides (modify rule levels or disable rules)
  rules: {
    '@eslint-react/no-missing-key': 'warn'
  }
});
