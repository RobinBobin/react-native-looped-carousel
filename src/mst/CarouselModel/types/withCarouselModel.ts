import type { NativeMethods } from 'react-native'
import type {
  TCarouselModelInstance,
  TCarouselModelInternalInstance
} from '../CarouselModel'

export type TWithCarouselModel<
  TItem,
  TComponent extends NativeMethods,
  TIsInternal extends boolean = true
> = Readonly<{
  carouselModel: TIsInternal extends false ?
    TCarouselModelInstance<TItem, TComponent>
  : TCarouselModelInternalInstance<TItem, TComponent>
}>
