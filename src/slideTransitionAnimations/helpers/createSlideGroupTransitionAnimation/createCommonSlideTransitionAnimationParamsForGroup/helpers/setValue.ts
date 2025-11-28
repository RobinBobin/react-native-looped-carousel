import type { TRSlideIds } from '../../../../../mst'
import type {
  TCommonSlideTransitionAnimationParamKey,
  TCommonSlideTransitionAnimationParamValue,
  TRBaseSlideTransitionAnimations,
  TRCommonSlideTransitionAnimationParams
} from '../../../../types'

import { getBaseSlideTransitionAnimation } from '../../../getBaseSlideTransitionAnimation'

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
export const setValue = <T extends TCommonSlideTransitionAnimationParamValue>(
  key: TCommonSlideTransitionAnimationParamKey,
  rawAnimation: TRCommonSlideTransitionAnimationParams &
    TRBaseSlideTransitionAnimations,
  slideIds: TRSlideIds,
  value: T
): void => {
  slideIds.forEach(slideId => {
    ;(getBaseSlideTransitionAnimation(rawAnimation, slideId)[key] as T) = value
  })
}
