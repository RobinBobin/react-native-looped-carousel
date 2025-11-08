import type { TSlideId, TSlideType } from '../types'

interface IItemComponentProps<TItem> {
  index: number
  item: TItem
  slideId: TSlideId
  slideType: TSlideType
}

type TItemComponent<TItem> = React.ComponentType<IItemComponentProps<TItem>>

export type { IItemComponentProps, TItemComponent }
