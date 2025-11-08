import type { TSlideId, TWithCarouselModel } from '../../../../mst'

import { StyleSheet } from 'react-native'
import Animated from 'react-native-reanimated'
import { verify } from 'simple-common-utils'

type TSlideProps<TItem> = TWithCarouselModel<TItem> &
  Readonly<{
    slideId: TSlideId
  }>

export function Slide<TItem>({
  carouselModel,
  slideId
}: TSlideProps<TItem>): React.ReactElement {
  const { Item, data, slideData, slideGroupTransitionAnimation } = carouselModel
  const slideDatum = slideData[slideId]

  verify(Item, "'Slide': 'Item' can't be nullish")

  verify(
    slideDatum,
    `'Slide': 'slideDatum' can't be nullish ('slideId' = '${slideId}')`
  )

  const { itemIndex, slideType } = slideDatum
  const datum = data[itemIndex]

  verify(
    datum,
    `'Slide': 'datum' can't be nullish ('itemIndex' = ${itemIndex})`
  )

  const { item } = datum

  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFill,
        slideGroupTransitionAnimation
          .getBaseSlideTransitionAnimation(slideId)
          .useStyle()
      ]}
    >
      <Item
        index={itemIndex}
        item={item}
        slideId={slideId}
        slideType={slideType}
      />
    </Animated.View>
  )
}
