import type {
  TRawSlideGroupTransitionAnimation,
  TRWithActiveSlideCount
} from '../../types'

import { combine } from '../combine'
import { createCommonSlideTransitionAnimationParamsForGroup } from './createCommonSlideTransitionAnimationParamsForGroup'
import { createWithGetBaseSlideTransitionAnimation } from './createWithGetBaseSlideTransitionAnimation'

// eslint-disable-next-line id-length
export const createRawSlideGroupTransitionAnimation = (
  withActiveSlideCount: TRWithActiveSlideCount
): TRawSlideGroupTransitionAnimation => {
  return combine(
    createCommonSlideTransitionAnimationParamsForGroup(
      withActiveSlideCount.slideIds
    ),
    withActiveSlideCount,
    createWithGetBaseSlideTransitionAnimation()
  )
}
