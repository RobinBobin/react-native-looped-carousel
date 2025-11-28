import type { TSlideGroupTransitionAnimation } from '../../types'
import type { TCreateSlideGroupTransitionAnimationParams } from './types'

import { objectify } from 'radashi'

import { combine } from '../combine'
import { createCommonSlideTransitionAnimationParamsForGroup } from './createCommonSlideTransitionAnimationParamsForGroup'
import { createIsAnimationInProgress } from './createIsAnimationInProgress'
import { createWithGetBaseSlideTransitionAnimation } from './createWithGetBaseSlideTransitionAnimation'
import { createWithPrepare } from './createWithPrepare'

// eslint-disable-next-line id-length
export const createSlideGroupTransitionAnimation = ({
  animationMethods,
  axes,
  carouselModel,
  createSlideTransitionAnimation,
  withSlideCount
}: TCreateSlideGroupTransitionAnimationParams): TSlideGroupTransitionAnimation => {
  const { slideIds } = withSlideCount

  const slideTransitionAnimations = objectify(
    slideIds,
    slideId => slideId,
    (slideId, slideIndex) =>
      createSlideTransitionAnimation({
        axes,
        carouselModel,
        slideId,
        slideIndex
      })
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
