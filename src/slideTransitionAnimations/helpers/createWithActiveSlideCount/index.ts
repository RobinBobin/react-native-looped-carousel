import type { TSlideId } from '../../../mst'
import type { IWithActiveSlideCount } from '../../types'
import type { TCreateWithActiveSlideCountParams } from './types'

import { verify } from 'simple-common-utils'

import { createSlideIds } from './createSlideIds'

export const createWithActiveSlideCount = ({
  carouselModel,
  max,
  min
}: TCreateWithActiveSlideCountParams): IWithActiveSlideCount => {
  verify(min >= 1, `'createWithActiveSlideCount()': min (${min}) must be >= 1`)

  verify(
    max >= min,
    `'createWithActiveSlideCount()': max (${max}) must be >= min (${min})`
  )

  let _slideIds: TSlideId[] = createSlideIds(max)

  return {
    get activeSlideCount(): number {
      return _slideIds.length
    },
    set activeSlideCount(activeSlideCount: number) {
      verify(
        activeSlideCount >= min && activeSlideCount <= max,
        `'createWithActiveSlideCount()': min (${min} <= activeSlideCount (${activeSlideCount}) <= max (${max}))`
      )

      _slideIds = createSlideIds(activeSlideCount)

      carouselModel.setSlideData()
    },
    get maxActiveSlideCount(): number {
      return max
    },
    get minActiveSlideCount(): number {
      return min
    },
    get slideIds(): readonly TSlideId[] {
      return _slideIds
    }
  }
}
