import type { TRSlideIds } from '../../../../../mst'
import type {
  TCommonSlideTransitionAnimationParam,
  TRBaseSlideTransitionAnimations,
  TRCommonSlideTransitionAnimationParams
} from '../../../../types'

import { getBaseSlideTransitionAnimation } from '../../../getBaseSlideTransitionAnimation'

export const setValue = (
  param: TCommonSlideTransitionAnimationParam,
  rawAnimation: TRCommonSlideTransitionAnimationParams &
    TRBaseSlideTransitionAnimations,
  slideIds: TRSlideIds,
  value: number
): void => {
  slideIds.forEach(slideId => {
    getBaseSlideTransitionAnimation(rawAnimation, slideId)[param] = value
  })
}
