import type { TRSlideIds } from '../../../../../mst'
import type {
  TCommonSlideTransitionAnimationParam,
  TRBaseSlideTransitionAnimations,
  TRCommonSlideTransitionAnimationParams
} from '../../../../types'

import { isNumber } from 'radashi'
import { verify } from 'simple-common-utils'

import { getBaseSlideTransitionAnimation } from '../../../getBaseSlideTransitionAnimation'

export const ensureEquality = (
  param: TCommonSlideTransitionAnimationParam,
  rawAnimation: TRCommonSlideTransitionAnimationParams &
    TRBaseSlideTransitionAnimations,
  slideIds: TRSlideIds
): number => {
  const values = slideIds.map(
    slideId => getBaseSlideTransitionAnimation(rawAnimation, slideId)[param]
  )

  const errorMessage = `'ensureEquality(${param})' failed: [${values.join(', ')}]`

  verify(Math.max(...values) === Math.min(...values), errorMessage)

  const [value] = values

  verify(isNumber(value), errorMessage)

  return value
}
