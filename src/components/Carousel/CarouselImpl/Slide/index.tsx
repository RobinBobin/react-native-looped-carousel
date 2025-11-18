import type { NativeMethods } from 'react-native'
import type { TSlideProps } from './types'

import { observer } from 'mobx-react-lite'
import { isNullish } from 'radashi'
import { StyleSheet } from 'react-native'
import Animated from 'react-native-reanimated'
import { verify } from 'simple-common-utils'

import { getItemRef } from './getItemRef'

function SlideRaw<TItem, TComponent extends NativeMethods>({
  carouselModel,
  slideId
}: TSlideProps<TItem, TComponent>): React.ReactElement {
  const {
    Item,
    data,
    itemDimensions,
    slideData,
    slideGroupTransitionAnimation
  } = carouselModel

  const slideDatum = slideData[slideId]

  verify(Item, "'Slide': 'Item' can't be nullish")

  verify(
    slideDatum,
    `'Slide': 'slideDatum' can't be nullish ('slideId' = '${slideId}')`
  )

  const { itemIndex, slideType } = slideDatum
  const item = data[itemIndex]

  verify(
    !isNullish(item),
    `'Slide': 'item' can't be nullish ('itemIndex' = ${itemIndex})`
  )

  const itemRef = getItemRef(
    itemDimensions,
    itemIndex,
    carouselModel.setItemDimensions
  )

  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFill,
        slideGroupTransitionAnimation
          .getBaseSlideTransitionAnimation(slideId)
          .useStyle(),
        itemDimensions[itemIndex]
      ]}
    >
      <Item
        index={itemIndex}
        item={item}
        ref={itemRef}
        slideId={slideId}
        slideType={slideType}
      />
    </Animated.View>
  )
}

const Slide = observer(SlideRaw)

export { Slide }
