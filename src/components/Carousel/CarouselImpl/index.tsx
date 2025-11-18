import type { TWithCarouselModel } from '../../../mst'

import { observer } from 'mobx-react-lite'
import Animated from 'react-native-reanimated'

import { Slide } from './Slide'

function CarouselImplRaw<TItem>({
  carouselModel
}: TWithCarouselModel<TItem>): React.ReactElement {
  const {
    carouselContainerStyle,
    slideGroupTransitionAnimation: { slideIds }
  } = carouselModel

  return (
    <Animated.View style={carouselContainerStyle}>
      {slideIds.map(slideId => (
        <Slide carouselModel={carouselModel} key={slideId} slideId={slideId} />
      ))}
    </Animated.View>
  )
}

const CarouselImpl = observer(CarouselImplRaw)

export { CarouselImpl }
