import type { NativeMethods } from 'react-native'
import type { TSlideId, TWithCarouselModel } from '../../../../mst'

export type TSlideProps<
  TItem,
  TComponent extends NativeMethods
> = TWithCarouselModel<TItem, TComponent> &
  Readonly<{
    slideId: TSlideId
  }>
