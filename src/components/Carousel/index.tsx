import type { TWithCarouselModel } from '../../mst'

import { observer } from 'mobx-react-lite'

import { CarouselImpl } from './CarouselImpl'
import { CarouselPlaceholderImpl } from './CarouselPlaceholderImpl'

function CarouselRaw<TItem>({
  carouselModel
}: TWithCarouselModel<TItem>): React.ReactElement<TWithCarouselModel<TItem>> {
  const Component =
    carouselModel.isCarouselReady ? CarouselImpl : CarouselPlaceholderImpl

  return <Component carouselModel={carouselModel} />
}

const Carousel = observer(CarouselRaw)

export { Carousel }
