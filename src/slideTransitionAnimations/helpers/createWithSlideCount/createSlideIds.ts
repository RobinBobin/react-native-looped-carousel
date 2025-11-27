import type { ReadonlyDeep } from 'type-fest'
import type { TRSlideIds, TSlideId } from '../../../mst'
import type { ISlideCount } from '../../types'

import { range } from 'radashi'

import { SLIDE_ID_PREFIX } from '../../../mst/CarouselModel/constants'

export const createSlideIds = (
  slideCount: ReadonlyDeep<[ISlideCount, ISlideCount, ISlideCount]>
): TRSlideIds => {
  const totalSlideCount = slideCount.reduce(
    (previous, { count }) => previous + count,
    0
  )

  return Array.from(
    range<TSlideId>(
      0,
      totalSlideCount - 1,
      index => `${SLIDE_ID_PREFIX}${index}`
    )
  )
}
