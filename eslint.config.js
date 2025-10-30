import parentConfig from '@robinbobin/eslint-config-react'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  ...parentConfig,
  {
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
      ]
    }
  }
])
