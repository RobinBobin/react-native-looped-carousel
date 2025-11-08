import type { TWithCarouselModel } from '../../../mst'

import { observer } from 'mobx-react-lite'
import { View } from 'react-native'

import { Slide } from './Slide'

function CarouselImplRaw<TItem>({
  carouselModel
}: TWithCarouselModel<TItem>): React.ReactElement {
  const {
    carouselContainerStyle,
    slideGroupTransitionAnimation: { slideIds }
  } = carouselModel

  return (
    <View style={carouselContainerStyle}>
      {slideIds.map(slideId => (
        <Slide carouselModel={carouselModel} key={slideId} slideId={slideId} />
      ))}
    </View>
  )
}

const CarouselImpl = observer(CarouselImplRaw)

export { CarouselImpl }
