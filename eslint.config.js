import { js } from '@robinbobin/eslint-config/ruleOptions'
import parentConfig from '@robinbobin/eslint-config-react'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  ...parentConfig,
  {
    languageOptions: {
      parserOptions: {
        projectService: true
      }
    },
    rules: {
      '@typescript-eslint/no-invalid-void-type': [
        'error',
        {
          allowAsThisParameter: true
        }
      ],
      '@typescript-eslint/prefer-readonly-parameter-types': [
        'error',
        {
          allow: [
            {
              from: 'file',
              name: ['ICarouselModelInstance']
            },
            {
              from: 'package',
              name: ['RecursiveArray', 'RegisteredStyle', 'ViewStyle'],
              package: 'react-native'
            }
          ],
          ignoreInferredTypes: true
        }
      ],
      'id-length': [
        'error',
        {
          ...js.idLength,
          exceptionPatterns: ['(setC|c)arouselPlaceholderContainerStyle']
        }
      ]
    }
  }
])
