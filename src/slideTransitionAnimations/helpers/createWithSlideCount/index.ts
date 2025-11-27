import type { TRSlideIds, TSlideId } from '../../../mst'
import type { IWithSlideCount } from '../../types'
import type { TCreateWithSlideCountParams } from './types'

import { assert, range } from 'radashi'

import { SLIDE_ID_PREFIX } from '../../../mst/CarouselModel/constants'
import { createSlideCount } from './createSlideCount'

export const createWithSlideCount = ({
  carouselModel,
  slideCountRanges
}: TCreateWithSlideCountParams): IWithSlideCount => {
  const activeSlideCount = createSlideCount('active', slideCountRanges?.active)
  const nextSlideCount = createSlideCount('next', slideCountRanges?.next)

  const previousSlideCount = createSlideCount(
    'previous',
    slideCountRanges?.previous
  )

  let _slideIds: TRSlideIds = []

  return {
    activeSlideCount,
    createSlideIds(): void {
      const totalSlideCount =
        this.previousSlideCount.count +
        this.activeSlideCount.count +
        this.nextSlideCount.count

      _slideIds = Array.from(
        range<TSlideId>(
          1,
          totalSlideCount,
          index => `${SLIDE_ID_PREFIX}${index}`
        )
      )

      carouselModel.setSlideData()
    },
    nextSlideCount,
    previousSlideCount,
    get slideIds(): TRSlideIds {
      assert(
        _slideIds.length,
        "createWithSlideCount()': 'slideIds' can't be empty"
      )

      return _slideIds
    }
  }
}
