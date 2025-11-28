import type { TRCarouselModel } from '../../mst/CarouselModel'
import type { TSlideGroupTransitionAnimation } from '../types'

import { noop } from 'radashi'

import {
  combine,
  createCommonSlideTransitionAnimationParams,
  createSlideGroupTransitionAnimation,
  createWithSlideCount
} from '../helpers'

export const createStubAnimation = (
  carouselModel: TRCarouselModel
): TSlideGroupTransitionAnimation => {
  const withSlideCount = createWithSlideCount({
    carouselModel
  })

  const animation = createSlideGroupTransitionAnimation(
    {
      animate: noop,
      cancelInProgressAnimation: noop
    },
    () =>
      combine(createCommonSlideTransitionAnimationParams(), {
        useStyle: () => ({})
      }),
    withSlideCount
  )

  return animation
}
