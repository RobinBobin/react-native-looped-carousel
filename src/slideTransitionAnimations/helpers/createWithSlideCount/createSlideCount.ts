import type { ISlideCount } from '../../types'
import type { TSlideCountRange } from './types'

import { assert } from 'radashi'

export const createSlideCount = (
  tag: string,
  range?: TSlideCountRange
): ISlideCount => {
  const max = range?.max ?? 1
  const min = range?.min ?? 1

  assert(min >= 1, `'createSlideCount(${tag})': min (${min}) must be >= 1`)

  assert(
    max >= min,
    `'createSlideCount(${tag})': max (${max}) must be >= min (${min})`
  )

  let _count = max

  return {
    get count(): number {
      return _count
    },
    set count(count: number) {
      assert(
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
