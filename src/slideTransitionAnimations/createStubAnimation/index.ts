import type { TRCarouselModel } from '../../mst/CarouselModel'
import type { TSlideGroupTransitionAnimation } from '../types'

import { noop, objectify } from 'radashi'

import {
  combine,
  createCommonSlideTransitionAnimationParams,
  createRawSlideGroupTransitionAnimation,
  createWithActiveSlideCount
} from '../helpers'

export const createStubAnimation = (
  carouselModel: TRCarouselModel
): TSlideGroupTransitionAnimation => {
  const withActiveSlideCount = createWithActiveSlideCount({
    carouselModel,
    max: 1,
    min: 1
  })

  const animation = combine(
    createRawSlideGroupTransitionAnimation(withActiveSlideCount),
    objectify(
      withActiveSlideCount.slideIds,
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
