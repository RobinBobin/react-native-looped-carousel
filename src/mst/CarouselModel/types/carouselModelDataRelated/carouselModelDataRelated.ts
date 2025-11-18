import type { NativeMethods } from 'react-native'
import type { TItemComponent } from './itemRendering'

// Type 'ICarouselModelDataRelatedActions' does not satisfy the constraint 'ModelActions'.
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type TCarouselModelDataRelatedActions<
  TItemDatum,
  TComponent extends NativeMethods
> = {
  setData: (data: readonly TItemDatum[]) => void
  setItemComponent: (Item: TItemComponent<TItemDatum, TComponent>) => void
}

interface ICarouselModelDataRelatedVolatile<
  TItemDatum,
  TComponent extends NativeMethods
> {
  Item?: TItemComponent<TItemDatum, TComponent>
  data: readonly TItemDatum[]
}

export type {
  ICarouselModelDataRelatedVolatile,
  TCarouselModelDataRelatedActions
}
