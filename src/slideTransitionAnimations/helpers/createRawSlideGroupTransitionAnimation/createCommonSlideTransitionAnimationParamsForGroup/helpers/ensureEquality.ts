import type { TRSlideIds } from '../../../../../mst'
import type {
  TCommonSlideTransitionAnimationParamKey,
  TCommonSlideTransitionAnimationParamValue,
  TRBaseSlideTransitionAnimations,
  TRCommonSlideTransitionAnimationParams
} from '../../../../types'

import { isEqual, isNullish } from 'radashi'
import { verify } from 'simple-common-utils'

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

  verify(areEqual, errorMessage)

  const [value] = values

  verify(!isNullish(value), errorMessage)

  return value
}
