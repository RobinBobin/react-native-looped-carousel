import type { TWithCarouselModel } from '../../../mst'

import { Text } from 'react-native'

export function CarouselPlaceholderImpl<TItem>({
  carouselModel: { CarouselPlaceholder }
}: TWithCarouselModel<TItem>): React.ReactElement {
  return CarouselPlaceholder ?
      <CarouselPlaceholder />
    : <Text>Carousel placeholder</Text>
}
