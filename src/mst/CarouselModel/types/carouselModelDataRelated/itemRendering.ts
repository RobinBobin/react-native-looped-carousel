import type { RefCallback } from 'react'
import type { NativeMethods } from 'react-native'
import type { TSlideId, TSlideType } from '../types'

interface IItemComponentProps<TItemTDatum, TComponent extends NativeMethods> {
  index: number
  item: TItemTDatum
  ref: RefCallback<TComponent>
  slideId: TSlideId
  slideType: TSlideType
}

type TItemComponent<
  TItemDatum,
  TComponent extends NativeMethods
> = React.ComponentType<IItemComponentProps<TItemDatum, TComponent>>

export type { IItemComponentProps, TItemComponent }
