import antfu from '@antfu/eslint-config'
import betterTailwind from 'eslint-plugin-better-tailwindcss'

export default antfu(
  {
    react: true,
    nextjs: true,
    typescript: true,

    // Configuration preferences
    lessOpinionated: false,
    isInEditor: false,

    stylistic: {
      indent: 2, // 4, or 'tab'
      quotes: 'single', // or 'double'
    },

    // Format settings
    formatters: {
      css: false,
    },

    ignores: [
      '**/node_modules/**',
      '**/.next/**',
      '**/public/**',
      '**/sanity.types.ts',
      'pnpm-workspace.yaml',
      '.github/**',
      'CLAUDE.md',
    ],

    // react: {
    //   overrides: {

    //   }
    // },

    rules: {
      'style/jsx-self-closing-comp': 'error',
      'style/no-extra-parens': 'error',
      'no-unused-vars': [
        'warn',
        {
          caughtErrors: 'none',
          argsIgnorePattern: '^_',
        },
      ],
      'unused-imports/no-unused-vars': [
        'warn',
        {
          caughtErrors: 'none',
          argsIgnorePattern: '^_',
        },
      ],
      'node/prefer-global/process': 'off',
      'react-hooks-extra/no-direct-set-state-in-use-effect': 'off',
      'react-hooks/set-state-in-effect': 'off',
      'react-refresh/only-export-components': 'off',
      'ts/consistent-type-definitions': ['warn', 'type'],
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      'react/no-array-index-key': 'off',
      'next/no-img-element': 'off',
      'react/prefer-use-state-lazy-initialization': 'off',

      // perfectionist
      'perfectionist/sort-imports': [
        'error',
        {
          groups: [
            'type',
            ['parent-type', 'sibling-type', 'index-type', 'internal-type'],
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
            'side-effect',
            'object',
            'unknown',
          ],
          newlinesBetween: 1,
          order: 'asc',
          type: 'natural',
        },
      ],
    },
  },

  {
    plugins: {
      'better-tailwindcss': betterTailwind,
    },
    rules: {
      // enable all recommended rules to report a warning
      ...betterTailwind.configs['recommended-warn'].rules,
      // enable all recommended rules to report an error
      ...betterTailwind.configs['recommended-error'].rules,

      // or configure rules individually
      'better-tailwindcss/no-unregistered-classes': [
        'error',
        {
          ignore: ['dark'],
        },
      ],
    },
    settings: {
      'better-tailwindcss': {
        // tailwindcss 4: the path to the entry file of the css based tailwind config (eg: `src/global.css`)
        entryPoint: 'src/styles/globals.css',
      },
    },
  },
)
