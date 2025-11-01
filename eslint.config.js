import { ts } from '@robinbobin/eslint-config/ruleOptions'
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
      '@typescript-eslint/no-magic-numbers': [
        'error',
        {
          ...ts.noMagicNumbers,
          ignore: [0, 1]
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
      ]
    }
  },
  {
    files: ['./src/mst/CarouselModel/CarouselModel.ts'],
    rules: {
      'id-length': 'off'
    }
  }
])
