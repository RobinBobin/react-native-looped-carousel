import { Text } from 'react-native'
import type { TWithCarouselModel } from '../../../mst'

export function CarouselPlaceholder<TItem>({
  carouselModel: { CarouselPlaceholder }
}: TWithCarouselModel<TItem>) {
  return CarouselPlaceholder ?
      <CarouselPlaceholder />
    : <Text>Carousel placeholder</Text>
}
