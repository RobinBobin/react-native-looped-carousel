import type { TSlideId } from '../../mst'
import type {
  IBaseSlideTransitionAnimation,
  TRBaseSlideTransitionAnimations
} from '../types/slideTransitionAnimation'

import { verify } from 'simple-common-utils'

// eslint-disable-next-line id-length
export const getBaseSlideTransitionAnimation = (
  baseSlideTransitionAnimations: TRBaseSlideTransitionAnimations,
  slideId: TSlideId
): IBaseSlideTransitionAnimation => {
  const animation = baseSlideTransitionAnimations[slideId]

  verify(
    animation,
    `'getBaseSlideTransitionAnimation()': no slide transition animation for '${slideId}'`
  )

  return animation
}
