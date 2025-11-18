import type { NativeMethods } from 'react-native'
import type { ICarouselModelInstance } from '../CarouselModel'

export type TWithCarouselModel<
  TItem,
  TComponent extends NativeMethods
> = Readonly<{
  carouselModel: ICarouselModelInstance<TItem, TComponent>
}>
