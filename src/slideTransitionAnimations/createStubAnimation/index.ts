import type { TRCarouselModel } from '../../mst/CarouselModel'
import type { TSlideGroupTransitionAnimation } from '../types'

import { noop, objectify } from 'radashi'

import {
  combine,
  createCommonSlideTransitionAnimationParams,
  createRawSlideGroupTransitionAnimation,
  createWithSlideCount
} from '../helpers'

export const createStubAnimation = (
  carouselModel: TRCarouselModel
): TSlideGroupTransitionAnimation => {
  const withSlideCount = createWithSlideCount({
    carouselModel
  })

  const animation = combine(
    createRawSlideGroupTransitionAnimation(withSlideCount),
    objectify(
      withSlideCount.slideIds,
      slideId => slideId,
      () =>
        combine(createCommonSlideTransitionAnimationParams(), {
          useStyle: () => ({})
        })
    ),
    {
      animate: noop,
      cancelInProgressAnimation: noop
    }
  )

  return animation
}
