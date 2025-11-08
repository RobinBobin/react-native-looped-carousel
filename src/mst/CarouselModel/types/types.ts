type TCarouselPlaceholder = React.ComponentType

type TSlideId = `slide${number}`

type TTransitionDirection = 'next' | 'previous'
type TSlideType = 'active' | TTransitionDirection

type TSlideDatum = Readonly<{
  itemIndex: number
  slideType: TSlideType
}>

type TSlideData = Readonly<Record<TSlideId, TSlideDatum>>

export type {
  TCarouselPlaceholder,
  TSlideData,
  TSlideDatum,
  TSlideId,
  TSlideType,
  TTransitionDirection
}
