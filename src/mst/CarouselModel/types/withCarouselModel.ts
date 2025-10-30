import type { ICarouselModelInstance } from '../CarouselModel'

export type TWithCarouselModel<TItem> = Readonly<{
  carouselModel: ICarouselModelInstance<TItem>
}>
