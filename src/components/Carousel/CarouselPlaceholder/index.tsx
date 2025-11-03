import { Text, View } from 'react-native'
import type { TWithCarouselModel } from '../../../mst'

export function CarouselPlaceholder<TItem>({
  carouselModel: {
    carouselPlaceholderContainerStyle,
    renderCarouselPlaceholder
  }
}: TWithCarouselModel<TItem>) {
  return (
    <View style={carouselPlaceholderContainerStyle}>
      {renderCarouselPlaceholder?.() ?? <Text>Carousel placeholder</Text>}
    </View>
  )
}
