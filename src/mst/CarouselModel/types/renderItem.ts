import type { ReadonlyDeep } from 'type-fest'

type TRenderItemParams<TItem> = ReadonlyDeep<{
  index: number
  item: TItem
}>

type TRenderItem<TItem> = (
  params: TRenderItemParams<TItem>
) => React.ReactElement

export type { TRenderItem, TRenderItemParams }
