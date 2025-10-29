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
    files: ['./src/mst/**/*.ts'],
    rules: {
      '@typescript-eslint/no-empty-object-type': 'off'
    }
  }
])
