module.exports = {
  root: true,
  extends: [
    'prettier',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'standard',
  ],
  plugins: ['react', 'react-native', 'only-warn'],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  globals: {
    __DEV__: false,
    jasmine: false,
    beforeAll: false,
    afterAll: false,
    beforeEach: false,
    afterEach: false,
    test: false,
    expect: false,
    describe: false,
    jest: false,
    it: false,
  },
  rules: {
    'comma-dangle': 0,
    'no-unused-vars': 0,
    'no-undef': 0,
    quotes: 0,
    'react/no-unescaped-entities': 0,
    'react/prop-types': 'off',
    'react-native/no-raw-text': 0,
    'space-before-function-paren': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/member-delimiter-style': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-object-literal-type-assertion': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'react-native/no-color-literals': 0,
    indent: 0,
    'react/indent': 0,
    'react-native/indent': 0,
    '@typescript-eslint/camelcase': 'off',
    'prettier/prettier': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    curly: 0,
    'arrow-spacing': 0,
    'keyword-spacing': 0,
    'no-trailing-spaces': 0,
    'object-curly-spacing': 0,
    'space-infix-ops': 0,
    'no-multi-spaces': 0,
    '@typescript-eslint/type-annotation-spacing': 0,
    'no-multiple-empty-lines': 0,
    'space-before-blocks': 0,
    'quote-props': 0,
  },
};
