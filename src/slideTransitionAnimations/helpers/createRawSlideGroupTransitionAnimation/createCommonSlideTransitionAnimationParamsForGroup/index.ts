import type { TRSlideIds } from '../../../../mst'
import type {
  ICommonSlideTransitionAnimationParams,
  TRBaseSlideTransitionAnimations
} from '../../../types'

import { ensureEquality, setValue } from './helpers'

// eslint-disable-next-line id-length
export const createCommonSlideTransitionAnimationParamsForGroup = (
  slideIds: TRSlideIds
): ICommonSlideTransitionAnimationParams & TRBaseSlideTransitionAnimations => {
  return {
    get duration(): number {
      return ensureEquality('duration', this, slideIds)
    },
    set duration(duration: number) {
      setValue('duration', this, slideIds, duration)
    },
    get preTransitionDelay(): number {
      return ensureEquality('preTransitionDelay', this, slideIds)
    },
    set preTransitionDelay(preTransitionDelay: number) {
      setValue('preTransitionDelay', this, slideIds, preTransitionDelay)
    }
  }
}
