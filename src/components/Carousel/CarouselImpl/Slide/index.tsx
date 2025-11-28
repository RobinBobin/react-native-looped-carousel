import type { NativeMethods } from 'react-native'
import type { TSlideProps } from './types'

import { observer } from 'mobx-react-lite'
import { assert, isNullish } from 'radashi'
import { StyleSheet } from 'react-native'
import Animated from 'react-native-reanimated'

import { getItemRef } from './getItemRef'

function SlideRaw<TItem, TComponent extends NativeMethods>({
  carouselModel,
  slideId
}: TSlideProps<TItem, TComponent>): React.ReactElement {
  const {
    Item,
    data,
    getSlideDatum,
    itemDimensions,
    slideGroupTransitionAnimation
  } = carouselModel

  assert(Item, "'Slide': 'Item' can't be nullish")

  const { itemIndex, slideType } = getSlideDatum(slideId)
  const item = data[itemIndex]

  assert(
    !isNullish(item),
    `'Slide': 'item' can't be nullish ('itemIndex' = ${itemIndex})`
  )

  const animatedStyle = slideGroupTransitionAnimation
    .getBaseSlideTransitionAnimation(slideId)
    .useStyle()

  const itemRef = getItemRef(
    itemDimensions,
    itemIndex,
    carouselModel.setItemDimensions
  )

  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFill,
        animatedStyle,
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
