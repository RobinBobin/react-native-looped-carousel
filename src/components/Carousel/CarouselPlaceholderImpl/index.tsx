import type { NativeMethods } from 'react-native'
import type { TWithCarouselModel } from '../../../mst/CarouselModel'

import { Text } from 'react-native'

export function CarouselPlaceholderImpl<
  TItem,
  TComponent extends NativeMethods
>({
  carouselModel: { CarouselPlaceholder }
}: TWithCarouselModel<TItem, TComponent>): React.ReactElement {
  return CarouselPlaceholder ?
      <CarouselPlaceholder />
    : <Text>Carousel placeholder</Text>
}
