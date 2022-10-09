module.exports = {
  extends: ['xo-react/space', 'xo-nextjs'],
  ignore: ['next-env.d.ts', 'next.config.js'],
  plugins: ['jsdoc'],
  rules: {
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          pascalCase: true,
          camelCase: true,
          kebabCase: true,
        },
      },
    ],
    'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
    'import/extensions': 'off',
    'n/file-extension-in-import': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'max-params': ['error', 3],
    'no-warning-comments': 'off',
    'capitalized-comments': [
      'error',
      'always',
      {
        ignorePattern: 'stylelint',
      },
    ],
  },
  semicolon: true,
  prettier: true,
  space: true,
  jsdoc: true,
};
