import type { IItemMetadata } from './itemMetadata'
import type { TItemComponent } from './itemRendering'

// Type 'ICarouselModelDataRelatedActions' does not satisfy the constraint 'ModelActions'.
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type TCarouselModelDataRelatedActions<TItem> = {
  setData: (data: readonly TItem[]) => void
  setItemComponent: (Item: TItemComponent<TItem>) => void
}

interface ICarouselModelDataRelatedVolatile<TItem> {
  Item?: TItemComponent<TItem>
  data: readonly [TItem, IItemMetadata][]
}

export type {
  ICarouselModelDataRelatedVolatile,
  TCarouselModelDataRelatedActions
}
