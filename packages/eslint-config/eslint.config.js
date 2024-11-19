import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'

export default [
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',

      'vue/multi-word-component-names': 'off',
      'vue/valid-v-slot': [
        'error',
        {
          allowModifiers: true,
        },
      ],
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'always',
            normal: 'never',
            component: 'any',
          },
          svg: 'always',
          math: 'always',
        },
      ],
      'vue/html-closing-bracket-newline': [
        'error',
        {
          singleline: 'never',
          multiline: 'always',
        },
      ],
      'vue/component-name-in-template-casing': [
        'error',
        'kebab-case',
        {
          registeredComponentsOnly: false,
          ignores: [],
        },
      ],
    },
    ignores: ['!node_modules/', '!build/', '!dist/'],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
  ...pluginVue.configs['flat/recommended'],
  ...vueTsEslintConfig(),
]
