type TCarouselPlaceholderComponent = React.ComponentType

type TItemDimensions = Readonly<{
  height: number
  width: number
}>

type TSlideId = `slide${number}`
type TRSlideIds = readonly TSlideId[]

type TTransitionDirection = 'next' | 'previous'
type TSlideType = 'active' | TTransitionDirection

type TSlideDatum = Readonly<{
  itemIndex: number
  slideType: TSlideType
}>

type TSlideData = Readonly<Record<TSlideId, TSlideDatum>>

export type {
  TCarouselPlaceholderComponent,
  TItemDimensions,
  TRSlideIds,
  TSlideData,
  TSlideId,
  TSlideType,
  TTransitionDirection
}
