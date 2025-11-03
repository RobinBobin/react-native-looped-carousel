import type { TSlideGroupTransitionAnimation } from '../types'

import { noop, objectify } from 'radashi'

import {
  createCommonSlideTransitionAnimationParams,
  createWithActiveSlideCount,
  createWithGetBaseSlideTransitionAnimation
} from '../helpers'

export const createStubAnimation = (): TSlideGroupTransitionAnimation => {
  const withActiveSlideCount = createWithActiveSlideCount({ max: 1, min: 1 })

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
    ...createWithGetBaseSlideTransitionAnimation(),
    animate: noop,
    cancelInProgressAnimation: noop,
    isAnimationInProgress: false,
    ...withActiveSlideCount,
    prepare: noop
  }
}
