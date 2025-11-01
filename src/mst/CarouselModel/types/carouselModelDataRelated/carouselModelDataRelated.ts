import type { IItemMetadata } from './itemMetadata'
import type { TRenderItem } from './renderItem'

// Type 'ICarouselModelDataRelatedActions' does not satisfy the constraint 'ModelActions'.
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type TCarouselModelDataRelatedActions<TItem> = {
  setData: (data: readonly TItem[]) => void
  setRenderItem: (renderItem: TRenderItem<TItem>) => void
}

interface ICarouselModelDataRelatedVolatile<TItem> {
  data: readonly [TItem, IItemMetadata][]
  renderItem?: TRenderItem<TItem>
}

export type {
  ICarouselModelDataRelatedVolatile,
  TCarouselModelDataRelatedActions
}
