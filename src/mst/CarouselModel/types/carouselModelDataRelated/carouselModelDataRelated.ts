import type { IItemMetadata } from './itemMetadata'
import type { TItemComponent } from './itemRendering'

// Type 'ICarouselModelDataRelatedActions' does not satisfy the constraint 'ModelActions'.
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type TCarouselModelDataRelatedActions<TItem> = {
  setData: (data: readonly TItem[]) => void
  setItemComponent: (Item: TItemComponent<TItem>) => void
}

type TDatum<TItem> = Readonly<{
  item: TItem
  itemMetadata: IItemMetadata
}>

interface ICarouselModelDataRelatedVolatile<TItem> {
  Item?: TItemComponent<TItem>
  data: readonly TDatum<TItem>[]
}

export type {
  ICarouselModelDataRelatedVolatile,
  TCarouselModelDataRelatedActions
}
