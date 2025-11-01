import type { TSlideId } from '../../../mst'

import { range } from 'radashi'

export const createSlideIds = (activeSlideCount: number): TSlideId[] => {
  const totalSlideCount = 1 + activeSlideCount + 1

  return Array.from(
    range<TSlideId>(0, totalSlideCount - 1, index => `slide${index + 1}`)
  )
}
