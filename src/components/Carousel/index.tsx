import type { NativeMethods } from 'react-native'
import type { TWithCarouselModel } from '../../mst'

import { observer } from 'mobx-react-lite'

import { CarouselImpl } from './CarouselImpl'
import { CarouselPlaceholderImpl } from './CarouselPlaceholderImpl'

function CarouselRaw<TItem, TComponent extends NativeMethods>({
  carouselModel
}: TWithCarouselModel<TItem, TComponent>): React.ReactElement<
  TWithCarouselModel<TItem, TComponent>
> {
  const Component =
    carouselModel.isCarouselReady ? CarouselImpl : CarouselPlaceholderImpl

  return <Component carouselModel={carouselModel} />
}

const Carousel = observer(CarouselRaw)

export { Carousel }
