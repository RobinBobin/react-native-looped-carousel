import type { TSlideId } from '../../../../mst'
import type {
  TRSlideTransitionAnimations,
  TSlideTransitionAnimation
} from '../../../types'

import { getBaseSlideTransitionAnimation } from '../../getBaseSlideTransitionAnimation'

export const getSlideTransitionAnimation = (
  slideTransitionAnimations: TRSlideTransitionAnimations,
  slideId: TSlideId
): TSlideTransitionAnimation => {
  return getBaseSlideTransitionAnimation(
    slideTransitionAnimations,
    slideId
  ) as TSlideTransitionAnimation
}
