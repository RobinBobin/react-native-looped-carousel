import type { ICarouselModelInstance } from '../../../mst'

export type TCarouselSetupCallback<TItem> = (
  carouselModel: ICarouselModelInstance<TItem>
) => void
