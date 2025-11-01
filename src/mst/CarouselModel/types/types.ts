type TRenderCarouselPlaceholder = () => React.ReactElement

type TSlideId = `slide${number}`

type TTransitionDirection = 'next' | 'previous'
type TSlideType = 'active' | TTransitionDirection

type TSlideDatum = Readonly<[TSlideType, number]>
type TSlideData = Readonly<Record<TSlideId, TSlideDatum>>

export type {
  TRenderCarouselPlaceholder,
  TSlideData,
  TSlideDatum,
  TSlideId,
  TSlideType,
  TTransitionDirection
}
