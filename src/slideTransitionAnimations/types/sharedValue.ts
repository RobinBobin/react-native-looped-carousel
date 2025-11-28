import type { SharedValue } from 'react-native-reanimated'
import type { ReadonlyDeep } from 'type-fest'
import type { TAxis } from './axis'

interface IAxisSharedValue<T> {
  axis: TAxis
  sharedValue?: SharedValue<T>
}

export type TRAxisSharedValues<T> = ReadonlyDeep<IAxisSharedValue<T>[]>
