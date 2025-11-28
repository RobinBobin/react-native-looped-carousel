import type { TRSlideIds } from '../../../../mst'
import type {
  ICommonSlideTransitionAnimationParams,
  TRAnimationConfig,
  TRBaseSlideTransitionAnimations
} from '../../../types'

import { ensureEquality, setValue } from './helpers'

// eslint-disable-next-line id-length
export const createCommonSlideTransitionAnimationParamsForGroup = (
  slideIds: TRSlideIds
): ICommonSlideTransitionAnimationParams & TRBaseSlideTransitionAnimations => {
  return {
    get animationConfig(): TRAnimationConfig {
      return ensureEquality('animationConfig', this, slideIds)
    },
    set animationConfig(animationConfig: TRAnimationConfig) {
      setValue('animationConfig', this, slideIds, animationConfig)
    },
    get preTransitionDelay(): number {
      return ensureEquality('preTransitionDelay', this, slideIds)
    },
    set preTransitionDelay(preTransitionDelay: number) {
      setValue('preTransitionDelay', this, slideIds, preTransitionDelay)
    }
  }
}
