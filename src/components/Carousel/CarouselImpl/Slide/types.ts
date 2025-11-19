import type { NativeMethods } from 'react-native'
import type { TSlideId } from '../../../../mst'
import type { TWithCarouselModel } from '../../../../mst/CarouselModel'

export type TSlideProps<
  TItem,
  TComponent extends NativeMethods
> = TWithCarouselModel<TItem, TComponent> &
  Readonly<{
    slideId: TSlideId
  }>
