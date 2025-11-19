import type { TRCarouselModel } from '../../../mst/CarouselModel'

type TSlideCountRange = Readonly<{ max: number; min: number }>

type TRanges = Readonly<{
  active?: TSlideCountRange
  next?: TSlideCountRange
  previous?: TSlideCountRange
}>

type TCreateWithSlideCountParams = Readonly<{
  carouselModel: TRCarouselModel
  slideCountRanges?: TRanges
}>

export type { TCreateWithSlideCountParams, TSlideCountRange }
