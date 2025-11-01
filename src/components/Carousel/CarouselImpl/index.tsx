import { View } from 'react-native'
import type { TWithCarouselModel } from '../../../mst'
import { observer } from 'mobx-react-lite'

import { Slide } from './Slide'

function CarouselImplRaw<TItem>({ carouselModel }: TWithCarouselModel<TItem>) {
  const {
    carouselStyle,
    slideGroupTransitionAnimation: { slideIds }
  } = carouselModel

  return (
    <View style={carouselStyle}>
      {slideIds.map(slideId => (
        <Slide carouselModel={carouselModel} key={slideId} slideId={slideId} />
      ))}
    </View>
  )
}

const CarouselImpl = observer(CarouselImplRaw)

export { CarouselImpl }
