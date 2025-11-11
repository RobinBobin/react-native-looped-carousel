import type {
  TRawSlideGroupTransitionAnimation,
  TRWithActiveSlideCount
} from '../../types'

import { combine } from '../combine'
import { createCommonSlideTransitionAnimationParamsForGroup } from './createCommonSlideTransitionAnimationParamsForGroup'
import { createIsAnimationInProgress } from './createIsAnimationInProgress'
import { createWithGetBaseSlideTransitionAnimation } from './createWithGetBaseSlideTransitionAnimation'
import { createWithPrepare } from './createWithPrepare'

// eslint-disable-next-line id-length
export const createRawSlideGroupTransitionAnimation = (
  withActiveSlideCount: TRWithActiveSlideCount
): TRawSlideGroupTransitionAnimation => {
  const { slideIds } = withActiveSlideCount

  const animation = combine(
    createCommonSlideTransitionAnimationParamsForGroup(slideIds),
    createIsAnimationInProgress(slideIds),
    withActiveSlideCount,
    createWithGetBaseSlideTransitionAnimation(),
    createWithPrepare(slideIds)
  )

  return animation
}
