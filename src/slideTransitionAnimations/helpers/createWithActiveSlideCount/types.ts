import type { TRCarouselModel } from '../../../mst/CarouselModel'

export type TCreateWithActiveSlideCountParams = Readonly<{
  carouselModel: TRCarouselModel
  max: number
  min: number
}>
