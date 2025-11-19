import type { NativeMethods } from 'react-native'
import type { TCarouselModelInstance } from '../../../mst/CarouselModel'

export type TCarouselSetupCallback<TItem, TComponent extends NativeMethods> = (
  carouselModel: TCarouselModelInstance<TItem, TComponent>
) => void
