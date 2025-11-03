import type { TSlideGroupTransitionAnimation } from '../types'

import { noop, objectify } from 'radashi'

import {
  combine,
  createCommonSlideTransitionAnimationParams,
  createWithActiveSlideCount,
  createWithGetBaseSlideTransitionAnimation
} from '../helpers'

export const createSlideOverAnimation = (): TSlideGroupTransitionAnimation => {
  const withActiveSlideCount = createWithActiveSlideCount({ max: 1, min: 1 })

  return combine(
    objectify(
      withActiveSlideCount.slideIds,
      slideId => slideId,
      () => ({
        ...createCommonSlideTransitionAnimationParams(),
        useStyle: noop
      })
    ),
    createCommonSlideTransitionAnimationParams(),
    createWithGetBaseSlideTransitionAnimation(),
    {
      animate: noop,
      cancelInProgressAnimation: noop,
      isAnimationInProgress: false,
      prepare: noop
    },
    withActiveSlideCount
  )
}
