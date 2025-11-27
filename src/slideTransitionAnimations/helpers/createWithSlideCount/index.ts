import type { TRSlideIds } from '../../../mst'
import type { ISlideCount, IWithSlideCount } from '../../types'
import type { TCreateWithSlideCountParams } from './types'

import { assert } from 'radashi'

import { createSlideCount } from './createSlideCount'
import { createSlideIds } from './createSlideIds'

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

  const slideCount: [ISlideCount, ISlideCount, ISlideCount] = [
    activeSlideCount,
    nextSlideCount,
    previousSlideCount
  ]

  let _slideIds: TRSlideIds = createSlideIds(slideCount)

  return {
    activeSlideCount,
    createSlideIds(): void {
      _slideIds = createSlideIds(slideCount)

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
