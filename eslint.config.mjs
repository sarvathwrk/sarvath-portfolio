import next from 'eslint-config-next/core-web-vitals';

// eslint-config-next 16 ships a native flat config array; spread it directly.
const eslintConfig = [
  ...next,
  {
    rules: {
      semi: 'error',
      'no-unused-vars': 'warn',
      'import/no-anonymous-default-export': 'off',
      'react/display-name': 'off',
      '@next/next/no-img-element': 'off',
      'react/no-unescaped-entities': 'off',
      'no-extra-semi': 'off',
      // React Compiler-era react-hooks rules (new in eslint-config-next 16).
      // The app relies on the React Compiler at runtime; keep these visible as
      // warnings for future cleanup rather than blocking errors.
      'react-hooks/refs': 'warn',
      'react-hooks/set-state-in-effect': 'warn',
      'react-hooks/immutability': 'warn',
      'react-hooks/purity': 'warn',
      'react-hooks/preserve-manual-memoization': 'warn',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
  {
    ignores: ['.next/**', 'node_modules/**', 'public/**', 'out/**'],
  },
];

export default eslintConfig;
