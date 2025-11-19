type TCarouselPlaceholderComponent = React.ComponentType

type TItemDimensions = Readonly<{
  height: number
  width: number
}>

type TSlideKey = 'slide'
type TSlideId = `${TSlideKey}${number}`
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
  TSlideKey,
  TSlideType,
  TTransitionDirection
}
