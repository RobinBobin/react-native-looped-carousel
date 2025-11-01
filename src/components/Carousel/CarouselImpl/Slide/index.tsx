import { StyleSheet } from 'react-native'
import type { TSlideId, TWithCarouselModel } from '../../../../mst'

import Animated from 'react-native-reanimated'

type TSlideProps<TItem> = TWithCarouselModel<TItem> &
  Readonly<{
    slideId: TSlideId
  }>

export function Slide<TItem>({ carouselModel, slideId }: TSlideProps<TItem>) {
  const { slideGroupTransitionAnimation } = carouselModel

  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFill,
        slideGroupTransitionAnimation
          .getBaseSlideTransitionAnimation(slideId)
          .useStyle()
      ]}
    >
      {/* <SlideImage
        carouselModel={carouselModel}
        imageDataIndex={imageDataIndex}
        slideId={slideId}
        slidePosition={slidePosition}
      /> */}
    </Animated.View>
  )
}
