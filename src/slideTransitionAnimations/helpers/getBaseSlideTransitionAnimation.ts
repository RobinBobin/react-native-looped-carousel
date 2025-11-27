import type { TSlideId } from '../../mst'
import type {
  IBaseSlideTransitionAnimation,
  TRBaseSlideTransitionAnimations
} from '../types'

import { assert } from 'radashi'

// eslint-disable-next-line id-length
export const getBaseSlideTransitionAnimation = (
  baseSlideTransitionAnimations: TRBaseSlideTransitionAnimations,
  slideId: TSlideId
): IBaseSlideTransitionAnimation => {
  const animation = baseSlideTransitionAnimations[slideId]

  assert(
    animation,
    `'getBaseSlideTransitionAnimation()': no slide transition animation for '${slideId}'`
  )

  return animation
}
