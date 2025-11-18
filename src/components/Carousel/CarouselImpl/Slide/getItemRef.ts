import type { RefCallback } from 'react'
import type { NativeMethods } from 'react-native'
import type {
  ICarouselModelInstance,
  TItemDimensions
} from '../../../../mst/CarouselModel'

export const getItemRef = (
  itemDimensions: readonly TItemDimensions[],
  itemIndex: number,
  setItemDimensions: ICarouselModelInstance<
    unknown,
    NativeMethods
  >['setItemDimensions']
): RefCallback<NativeMethods> => {
  return node => {
    if (itemDimensions[itemIndex] || !node) {
      return
    }

    node.measure((_x, _y, width, height) => {
      setItemDimensions({ height, width }, itemIndex)
    })
  }
}
