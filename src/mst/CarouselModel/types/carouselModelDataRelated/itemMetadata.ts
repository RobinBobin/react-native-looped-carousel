import type { ViewStyle } from 'react-native'

type TDimensionKey = keyof Pick<ViewStyle, 'height' | 'width'>
type TDimensions = Record<TDimensionKey, number>

export interface IItemMetadata {
  dimensions?: TDimensions
}
