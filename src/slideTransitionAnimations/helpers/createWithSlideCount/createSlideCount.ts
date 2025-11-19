import type { ISlideCount } from '../../types'
import type { TSlideCountRange } from './types'

import { verify } from 'simple-common-utils'

export const createSlideCount = (
  tag: string,
  { max, min }: TSlideCountRange = { max: 1, min: 1 }
): ISlideCount => {
  verify(min >= 1, `'createSlideCount(${tag})': min (${min}) must be >= 1`)

  verify(
    max >= min,
    `'createSlideCount(${tag})': max (${max}) must be >= min (${min})`
  )

  let _count = max

  return {
    get count(): number {
      return _count
    },
    set count(count: number) {
      verify(
        count >= min && count <= max,
        `'createSlideCount(${tag})': min (${min}) <= count (${count}) <= max (${max}))`
      )

      _count = count
    },
    get maxCount(): number {
      return max
    },
    get minCount(): number {
      return min
    }
  }
}
