import type { NativeMethods } from 'react-native'
import type { ICarouselModelInstance } from '../../../mst'

export type TCarouselSetupCallback<TItem, TComponent extends NativeMethods> = (
  carouselModel: ICarouselModelInstance<TItem, TComponent>
) => void
