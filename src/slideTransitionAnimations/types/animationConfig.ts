import type {
  WithSpringConfig,
  WithTimingConfig
} from 'react-native-reanimated'
import type { ReadonlyDeep } from 'type-fest'

export type TRAnimationConfig = ReadonlyDeep<
  WithSpringConfig | WithTimingConfig
>
