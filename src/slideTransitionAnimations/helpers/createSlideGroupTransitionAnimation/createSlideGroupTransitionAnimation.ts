import type {
  TRAnimationMethods,
  TRWithSlideCount,
  TSlideGroupTransitionAnimation
} from '../../types'
import type { TCreateSlideTransitionAnimation } from './types'

import { objectify } from 'radashi'

import { combine } from '../combine'
import { createCommonSlideTransitionAnimationParamsForGroup } from './createCommonSlideTransitionAnimationParamsForGroup'
import { createIsAnimationInProgress } from './createIsAnimationInProgress'
import { createWithGetBaseSlideTransitionAnimation } from './createWithGetBaseSlideTransitionAnimation'
import { createWithPrepare } from './createWithPrepare'

// eslint-disable-next-line id-length
export const createSlideGroupTransitionAnimation = (
  animationMethods: TRAnimationMethods,
  createSlideTransitionAnimation: TCreateSlideTransitionAnimation,
  withSlideCount: TRWithSlideCount
): TSlideGroupTransitionAnimation => {
  const { slideIds } = withSlideCount

  const slideTransitionAnimations = objectify(
    slideIds,
    slideId => slideId,
    createSlideTransitionAnimation
  )

  const animation = combine(
    animationMethods,
    createCommonSlideTransitionAnimationParamsForGroup(slideIds),
    createIsAnimationInProgress(slideIds),
    createWithGetBaseSlideTransitionAnimation(),
    createWithPrepare(slideIds),
    slideTransitionAnimations,
    withSlideCount
  )

  return animation
}
