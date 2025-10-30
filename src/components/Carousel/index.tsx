import type { TWithCarouselModel } from '../../mst'
import { CarouselImpl } from './CarouselImpl'
import { CarouselPlaceholder } from './CarouselPlaceholder'

export function Carousel<TItem>({
  carouselModel
}: TWithCarouselModel<TItem>): React.ReactElement<TWithCarouselModel<TItem>> {
  const Component =
    carouselModel.isCarouselReady ? CarouselImpl : CarouselPlaceholder

  return <Component carouselModel={carouselModel} />
}
