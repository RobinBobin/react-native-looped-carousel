import type { TSlideGroupTransitionAnimation } from '../types'

import { noop, objectify } from 'radashi'

import {
  createCommonSlideTransitionAnimationParams,
  createWithActiveSlideCount
} from '../helpers'

export const createSlideOverAnimation = (): TSlideGroupTransitionAnimation => {
  const withActiveSlideCount = createWithActiveSlideCount(1)

  return {
    ...objectify(
      withActiveSlideCount.slideIds,
      slideId => slideId,
      () => ({
        ...createCommonSlideTransitionAnimationParams(),
        useStyle: noop
      })
    ),
    ...createCommonSlideTransitionAnimationParams(),
    animate: noop,
    cancelInProgressAnimation: noop,
    isAnimationInProgress: false,
    ...withActiveSlideCount,
    prepare: noop
  }
}
