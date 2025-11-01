import { View } from 'react-native'
import type { TWithCarouselModel } from '../../../mst'
import { observer } from 'mobx-react-lite'

function CarouselImplRaw<TItem>({ carouselModel }: TWithCarouselModel<TItem>) {
  return (
    <View style={carouselModel.carouselStyle}>
      <></>
    </View>
  )
}

const CarouselImpl = observer(CarouselImplRaw)

export { CarouselImpl }
