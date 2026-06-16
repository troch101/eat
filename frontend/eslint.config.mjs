export default [
  {
    ignores: ['dist/**', 'node_modules/**', '.taro/**']
  },
  {
    files: ['**/*.{js,cjs,mjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    }
  }
];
