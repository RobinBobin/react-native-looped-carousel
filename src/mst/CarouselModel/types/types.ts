type TRenderCarouselPlaceholder = () => React.ReactElement

type TSlideId = string & { __brand: 'TSlideId' }

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
