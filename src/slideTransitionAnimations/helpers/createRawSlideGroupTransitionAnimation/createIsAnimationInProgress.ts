import type { TRSlideIds } from '../../../mst'
import type {
  IIsAnimationInProgress,
  TRSlideTransitionAnimations
} from '../../types'

import { getSlideTransitionAnimation } from './helpers'

export const createIsAnimationInProgress = (
  slideIds: TRSlideIds
): IIsAnimationInProgress & TRSlideTransitionAnimations => ({
  get isAnimationInProgress(): boolean {
    return slideIds.some(
      slideId =>
        getSlideTransitionAnimation(this, slideId).isAnimationInProgress
    )
  }
})
