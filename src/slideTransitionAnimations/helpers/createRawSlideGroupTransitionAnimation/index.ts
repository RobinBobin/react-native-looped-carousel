import type {
  TRawSlideGroupTransitionAnimation,
  TRWithSlideCount
} from '../../types'

import { combine } from '../combine'
import { createCommonSlideTransitionAnimationParamsForGroup } from './createCommonSlideTransitionAnimationParamsForGroup'
import { createIsAnimationInProgress } from './createIsAnimationInProgress'
import { createWithGetBaseSlideTransitionAnimation } from './createWithGetBaseSlideTransitionAnimation'
import { createWithPrepare } from './createWithPrepare'

// eslint-disable-next-line id-length
export const createRawSlideGroupTransitionAnimation = (
  withSlideCount: TRWithSlideCount
): TRawSlideGroupTransitionAnimation => {
  const { slideIds } = withSlideCount

  const animation = combine(
    createCommonSlideTransitionAnimationParamsForGroup(slideIds),
    createIsAnimationInProgress(slideIds),
    createWithGetBaseSlideTransitionAnimation(),
    createWithPrepare(slideIds),
    withSlideCount
  )

  return animation
}
