import github from 'eslint-plugin-github'
import jest from 'eslint-plugin-jest'
import globals from 'globals'

const {typescript: typescriptConfigs} = github.getFlatConfigs()

export default [
  // Paths to ignore (replaces .eslintignore, which ESLint 9 no longer reads)
  {ignores: ['dist/**', 'lib/**', 'node_modules/**', 'src/@types/**']},

  // TypeScript + GitHub recommended base (includes @typescript-eslint + escompat)
  ...typescriptConfigs,

  // Project-wide overrides
  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 9
      },
      globals: {
        ...globals.node,
        ...globals.es2015
      }
    },
    plugins: {jest},
    rules: {
      'i18n-text/no-en': 'off',
      'eslint-comments/no-use': 'off',
      'import/no-namespace': 'off',
      'import/no-unresolved': 'off',
      'no-unused-vars': 'off',
      'camelcase': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/explicit-member-accessibility': ['error', {accessibility: 'no-public'}],
      '@typescript-eslint/no-require-imports': 'error',
      '@typescript-eslint/array-type': 'error',
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/ban-ts-comment': 'error',
      '@typescript-eslint/consistent-type-assertions': 'error',
      '@typescript-eslint/explicit-function-return-type': ['error', {allowExpressions: true}],
      '@typescript-eslint/no-array-constructor': 'error',
      '@typescript-eslint/no-empty-object-type': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-extraneous-class': 'error',
      '@typescript-eslint/no-for-in-array': 'error',
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/no-misused-new': 'error',
      '@typescript-eslint/no-namespace': 'error',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/no-unnecessary-qualifier': 'error',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/no-useless-constructor': 'error',
      '@typescript-eslint/prefer-for-of': 'warn',
      '@typescript-eslint/prefer-function-type': 'warn',
      '@typescript-eslint/prefer-includes': 'error',
      '@typescript-eslint/prefer-string-starts-ends-with': 'error',
      '@typescript-eslint/promise-function-async': 'error',
      '@typescript-eslint/require-array-sort-compare': 'error',
      '@typescript-eslint/restrict-plus-operands': 'error',
      '@typescript-eslint/unbound-method': 'error'
    }
  },

  // Jest globals for test files
  {
    files: ['**/__tests__/**/*.ts', '**/*.test.ts'],
    plugins: {jest},
    languageOptions: {
      globals: jest.environments.globals.globals
    }
  }
]
