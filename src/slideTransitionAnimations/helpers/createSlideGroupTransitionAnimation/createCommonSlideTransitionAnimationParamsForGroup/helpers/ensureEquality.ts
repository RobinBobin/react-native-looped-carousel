import type { TRSlideIds } from '../../../../../mst'
import type {
  TCommonSlideTransitionAnimationParamKey,
  TCommonSlideTransitionAnimationParamValue,
  TRBaseSlideTransitionAnimations,
  TRCommonSlideTransitionAnimationParams
} from '../../../../types'

import { assert, isEqual, isNullish } from 'radashi'

import { getBaseSlideTransitionAnimation } from '../../../getBaseSlideTransitionAnimation'

export const ensureEquality = <
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
  T extends TCommonSlideTransitionAnimationParamValue
>(
  key: TCommonSlideTransitionAnimationParamKey,
  rawAnimation: TRCommonSlideTransitionAnimationParams &
    TRBaseSlideTransitionAnimations,
  slideIds: TRSlideIds
): T => {
  const values = slideIds.map(
    slideId => getBaseSlideTransitionAnimation(rawAnimation, slideId)[key]
  ) as T[]

  const areEqual = values.every((value, index, array) => {
    return !index || isEqual(value, array[0])
  })

  const errorMessage = `'ensureEquality(${key})' failed: ${JSON.stringify(values)}`

  assert(areEqual, errorMessage)

  const [value] = values

  assert(!isNullish(value), errorMessage)

  return value
}
