import type { TSlideGroupTransitionAnimation } from '../types'

import { noop, objectify } from 'radashi'

import { SLIDE_IDS } from '../../mst/CarouselModel/constants'
import { createCommonSlideTransitionAnimationParams } from '../helpers'

export const createStubAnimation = (): TSlideGroupTransitionAnimation => {
  return {
    ...objectify(
      SLIDE_IDS,
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
    prepare: noop
  }
}
