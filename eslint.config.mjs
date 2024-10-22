import globals from 'globals';

export default [
  {
    rules: {
      'no-unused-vars': 'error',
      'no-undef': 'error',
      eqeqeq: 'error',
      quotes: ['warn', 'single'],
      'no-multi-spaces': 'warn',
      'no-trailing-spaces': 'warn',
      indent: ['warn', 2],
      'key-spacing': 'warn',
      'object-curly-spacing': ['warn', 'always'],
      'no-whitespace-before-property': 'warn',
      'comma-spacing': ['warn', { before: false, after: true }],
      'arrow-spacing': 'error',
      'no-var': 'error',
      'prefer-const': 'warn',
      semi: ['error', 'always'],
      'computed-property-spacing': ['error', 'never'],
      'require-await': 'error',
      'space-infix-ops': 'warn',
      'padding-line-between-statements': [
        'warn',
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: 'const', next: 'block-like' },
        { blankLine: 'always', prev: 'let', next: 'block-like' },
      ],
    },
  },
  { files: ['**/*.js'], languageOptions: { sourceType: 'module' } },
  { languageOptions: { globals: globals.node } },
];

// ],
// },
// // Aquí se establece el sourceType
// parserOptions: {
//   sourceType: 'module',
// },
// },
// { files: ['**/*.js'], languageOptions: { sourceType: 'module' } },
// { languageOptions: { globals: globals.node } },
// ];
